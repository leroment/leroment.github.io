// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ["Language", "Years of Experience", { role: "style" }],
    ["C#", 2, "#b87333"], // RGB value
    ["Java", 2, "#F56960"],
    ["Vanilla Javascript", 2, "#273E47"], // English color name
    ["React", 2, "gold"],
    ["Angular", 1, "color: #e5e4e2"], // CSS-style declaration
    ["HTML", 3, "blue"],
    ["CSS", 4, "#A4243B"],
  ]);

  // Set chart options
  var options = {
    legend: "none",
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}

$(window).resize(function () {
  drawChart();
});
