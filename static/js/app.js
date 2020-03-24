// from data.js
var tableData = data;

 //Get a reference to the table body
 var ufoTable = d3.select("#ufo-table");

 //Use d3 to append 1 cell per value
  data.forEach(function(ufoSighting) {
    var row = ufoTable.append("tr");
 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      var cell = row.append("td");
    });
  });
 
 //Use d3 to update each cell's text with  values
  data.forEach(function(ufoSighting) {
    var row = ufoTable.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
 

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input


  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");

 // Loop through all sightings and hide those who don't match the search date
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  