$.getJSON("/js/posts.json", callback);

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push( new Date (currentDate) )
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

/* function callback(data) {
  var dateArray = getDates(new Date(data.posts[0].date), new Date());
  var labels = [];
  var chartData = [];
  var postCount = 0;

  for (i = 0; i < dateArray.length; i++) {
    var currentDay = dateArray[i].getDate();
    var currentMonth = dateArray[i].getMonth() + 1;
    var currentYear = dateArray[i].getFullYear();
    var currentDate = currentMonth + "/" + currentDay + "/" + currentYear;
    // chartData.push({
    //  "date": currentDate
    // });
    labels.push(currentDate);
  }

  var numberOfPosts = 0;

  labels.forEach(function(label) {
    // count the number of posts matching that date
    for (i=0; i < data.posts.length; i++) {
      if (data.posts[i].date == label) {
        numberOfPosts++;
      }
    }
    chartData.push(numberOfPosts);
  });

  console.log(labels.length);
  console.log(chartData);

  createChart(labels, chartData);

}

*/

function callback(data) {
  var labels = [];
  var wordCounts = [];
  for (i = 0; i < data.posts.length; i++) {
    labels.push(i);
    wordCounts.push(data.posts[i].words);
  }
  console.log(labels);
  console.log(wordCounts);
  createChart(labels, wordCounts);
}

function createChart(labels, data) {
  console.log(data);
  var chartData = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: data
      }
    ]
  }
  Chart.defaults.global.responsive = true;
  var ctx = $("#myChart").get(0).getContext("2d");
  var myLineChart = new Chart(ctx).Line(chartData);
}
