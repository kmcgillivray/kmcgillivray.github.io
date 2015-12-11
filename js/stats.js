$.getJSON("/js/posts.json", callback);

// Add commas to numbers
$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}

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

function callback(data) {
  createStats(data);
  createChart(data);
}

function createStats(data) {
  var totalWords = 0;
  for (var i = 0; i < data.posts.length; i++) {
    totalWords += data.posts[i].words;
  }
  console.log(totalWords);
  var averageWords = Math.round(totalWords / data.posts.length);
  console.log(averageWords);
  $('#total-words').text(totalWords).digits();
  $('#average-words').text(averageWords).digits();
}

function createChart(data) {
  var labels = [];
  var wordCounts = [];
  for (i = 0; i < data.posts.length; i++) {
    labels.push(i);
    wordCounts.push(data.posts[i].words);
  }
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
        data: wordCounts
      }
    ]
  }
  Chart.defaults.global.responsive = true;
  var ctx = $("#myChart").get(0).getContext("2d");
  var myLineChart = new Chart(ctx).Line(chartData);
}
