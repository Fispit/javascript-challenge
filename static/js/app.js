// from data.js
var tableData = data;

//
var tbody=d3.select("tbody");




tableData.forEach((report)=>{
    var row=tbody.append("tr");
    Object.entries(report).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value)
    })
})


var datefilter=d3.select("#datetime").text; 
var cityfilter=d3.select("#city");
var statefilter=d3.select("#state");
var countryfilter=d3.select("#Country");
var shapefilter=d3.select("#Shape");
var fitereddata=tableData;


console.log(datefilter);