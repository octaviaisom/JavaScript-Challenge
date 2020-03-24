// from data.js
var tableData = data;

 //Get a reference to the table body
 var ufoTable = d3.select("#ufo-table");

 //Use d3 to append 1 cell per value
  data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = ufoTable.append("tr");
 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
    });
  });
 
 //Use d3 to update each cell's text with  values
  data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = ufoTable.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
 

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input.
  