import fetch from 'node-fetch';
import dotenv from 'dotenv';
import Twitter from 'twitter';
import Airtable from 'airtable';
import { AllHtmlEntities as Entities } from 'html-entities';

dotenv.config();

const NOTES_URL = 'https://kevinmcgillivray.net/notes.json';
const BASE_ID = 'app6OkG5p6ec08fZg';

const base = new Airtable().base(BASE_ID);

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const prepareStatusText = note => {
  const maxLength = 280;
  const entities = new Entities();

  // strip html tags and decode entities
  let text = note.content.trim().replace(/<[^>]+>/g, '');
  text = entities.decode(text);

  // truncate note text if its too long for a tweet.
  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }

  // include the note url at the end;
  // text = text + ' ' + note.url;
  return text;
}

const publishNote = async note => {
  try {
    const statusText = prepareStatusText(note);
    const tweet = await twitter.post('statuses/update', {
      status: statusText
    });
    const airtableRecord = await base('Notes').create({
      "ID": parseInt(note.id),
      "URL": note.url
    });
    if (tweet && airtableRecord) {
      return status(200, `Note ${note.date} successfully posted to Twitter and Airtable.`);
    } else {
      return status(422, 'Error posting to Twitter API.');
    }
  } catch (err) {
    return handleError(err);
  }
}

const processNotes = async notes => {
  if (!notes.length) {
    return status(404, 'No notes found to process.');
  }

  const latestNote = notes[0];
  if (!latestNote.syndicate) {
    return status(400, 'Latest note has disabled syndication. No action taken.');
  }

  try {
    // Check Airtable for a record with the ID and only syndicate if it doesn't exist in Airtable
    const records = await base('Notes').select({
      maxRecords: 1,
      filterByFormula: `{ID} = ${latestNote.id}`
    }).firstPage();

    if (records && records.length === 0) {
      return publishNote(latestNote);
    } else {
      return status(400, 'Latest note was already syndicated. No action taken.');
    }
  } catch (err) {
    return handleError(err);
  }

}

const handleError = err => ({
  statusCode: 422,
  body: String(err)
})

const status = (code, msg) => {
  console.log(msg);
  return {
    statusCode: code,
    body: msg
  }
}

exports.handler = async () => {
  return fetch(NOTES_URL)
    .then(response => response.json())
    .then(processNotes)
    .catch(handleError);
}
