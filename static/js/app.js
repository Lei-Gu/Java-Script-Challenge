// from data.js
let tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the  data from data.js
console.log(data);

// Loop Through `data` and console.log each report object
data.forEach(row => console.log(row));

data.forEach(row => {
    let nRow = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each value
    Object.entries(row).forEach(entry => {
        let key = entry[0];
        let val = entry[1];
        nRow.append("td").text(val)

})})



// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");


// Complete the click handler for the form
button.on("click", handleClick);
function handleClick() {
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  // Get the value property of the input element
  let inputText = inputElement.property("value");
  console.log(inputText);
  // Use the form input to filter the data 
  // retain only those people whose .bloodtype equals the input text
  let matches = tableData.filter(date => date.datetime === inputText);
  let summary = d3.select(".table-head")
  let matchdates = []; // making an array of ages
  matches.forEach(match => {
    matchdates.push(match.datetime);
    summary.append("li").text(match.datetime + " " + match.age);
  });


// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});


// make enter do the same thing as click
let form = d3.select("form");
form.on("submit", () => {d3.event.preventDefault(); handleClick();});
