import fetch from 'node-fetch';
import dotenv from 'dotenv';
import Twitter from 'twitter';
import { AllHtmlEntities as Entities } from 'html-entities';

dotenv.config();

const NOTES_URL = 'https://kevinmcgillivray.net/notes.json';

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const prepareStatusText = note => {
  const maxLength = 280 - 41;
  const entities = new Entities();

  // strip html tags and decode entities
  let text = note.content.trim().replace(/<[^>]+>/g, '');
  text = entities.decode(text);

  // truncate note text if its too long for a tweet.
  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + '...';
  }

  // include the note url at the end;
  text = text + ' ' + note.url;
  return text;
}

const publishNote = async note => {
  try {
    const statusText = prepareStatusText(note)
    const tweet = await twitter.post('statuses/update', {
      status: statusText
    })
    if (tweet) {
      return status(
        200,
        `Note ${note.date} successfully posted to Twitter.`
      )
    } else {
      return status(422, 'Error posting to Twitter API.')
    }
  } catch (err) {
    return handleError(err)
  }
}

const processNotes = async notes => {
  if (!notes.length) {
    return status(404, 'No notes found to process.')
  }

  const latestNote = notes[0];
  if (!latestNote.syndicate) {
    return status(
      400,
      'Latest note has disabled syndication. No action taken.'
    )
  }

  try {
    // check twitter for any tweets containing note URL.
    // if there are none, publish it.
    const q = await twitter.get('search/tweets', { q: latestNote.url });
    if (q.statuses && q.statuses.length === 0) {
      return publishNote(latestNote);
    } else {
      return status(
        400,
        'Latest note was already syndicated. No action taken.'
      )
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
