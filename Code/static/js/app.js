// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of 
// data for each UFO sighting.

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

  // Use d3 to update each cell's text with UFO Sighting values 
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {

      // Append a cell to the row for each value
      // in the UFO Sighting object
      var cell = row.append("td").text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that 
// will listen for events and search through the date/time column to 
// find rows that match user input.

// Select the submit button
var filter = d3.select("#filter-btn")

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

  tbody.html("");

  filteredData.forEach(function(filteredufoSightings) {
    var filteredRow = tbody.append("tr");
    Object.entries(filteredufoSightings).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the UFO Sighting object
      var filtredCell = filteredRow.append("td").text(value);
    });
  });
});
