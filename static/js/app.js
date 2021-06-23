// from data.js
var tableData = data;

//Selecting the table body
var tbody=d3.select("tbody");



//populating the table with the full dataset
tableData.forEach((report)=>{
    var row=tbody.append("tr");
    Object.entries(report).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value)
    })
})

var button=d3.select("#filter-btn");   


button.on("click",function(){
    //Reading values of text boxes and copying the raw data.
    var datefilter=d3.select("#datetime").property("value"); 
    var cityfilter=d3.select("#city").property("value");
    var statefilter=d3.select("#state").property("value");
    var countryfilter=d3.select("#Country").property("value");
    var shapefilter=d3.select("#Shape").property("value");
    var filtereddata=tableData;
    //Filtering the data
    filtereddata=filtereddata.filter(entry=>entry.datetime.includes(datefilter));
    filtereddata=filtereddata.filter(entry=>entry.city.includes(cityfilter));
    filtereddata=filtereddata.filter(entry=>entry.state.includes(statefilter));
    filtereddata=filtereddata.filter(entry=>entry.country.includes(countryfilter));
    filtereddata=filtereddata.filter(entry=>entry.shape.includes(shapefilter));
    //Clearing the table
    tbody.text("");
    //using same table population function as above but with the filtered data
    filtereddata.forEach((report)=>{
        var row=tbody.append("tr");
        Object.entries(report).forEach(([key,value])=>{
            var cell=row.append("td");
            cell.text(value)
        })
    })
})