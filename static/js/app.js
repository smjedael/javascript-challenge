// from data.js
var tableData = data;

// Select filter button
var filterButton = d3.select("#filter-btn");

// Select inputDate
var inputDate = d3.select("#datetime");
var dateValue = inputDate.property("value");

inputDate.on('change',function() {
    dateValue = inputDate.property("value");
});

filterButton.on('click',function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Filter data
    var filteredData;

    if (dateValue === '') {
        filteredData = tableData;
    }
    else {
        filteredData = tableData.filter(tableData => tableData.datetime === dateValue);
    }

    // Create table    
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;

    // Clear existing table if exists
    tbody.html('');

    for (var i = 0; i < filteredData.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(filteredData[i].datetime);
        trow.append("td").text(filteredData[i].city);
        trow.append("td").text(filteredData[i].state);
        trow.append("td").text(filteredData[i].country);
        trow.append("td").text(filteredData[i].shape);
        trow.append("td").text(filteredData[i].durationMinutes);
        trow.append("td").text(filteredData[i].comments);
    }
});



