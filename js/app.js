
// Assign the data from `data.js` to a descriptive variable
let ufo = data;
// Select the button
let button = d3.select("#filter-btn");

let tbody = d3.select("tbody");

// autoPopulate(ufo)

// Use d3 to automatically populate tableData by creating table rows and cells.
function autoPopulate(ufo) {
  ufo.forEach((elements) => {
  // Creating table rows for each row of alients data
  var row = tbody.append("tr");
  //Iterating thru each row for key and values
  Object.entries(elements).forEach(([key, value]) => {
      // Creating cells for posting table data
      var cell = row.append("td");
      cell.text(value);
  });
});

}

var filterType = d3.select("#filter-type");
//function to invoke on selection of an item from dropdown
filterType.on("change", function() {
  var filterValue = filterType.property("value");
  console.log(filterValue);
  d3.select("#searchinput").node().value = '';
  // Setting placeholder values for input text
  switch (filterValue) {
      case 'datetime':
          placeHolder = '1/1/2010';
          break;
      case 'city':
          placeHolder = 'city';
          break;
      case 'state':
          placeHolder = 'state';
          break;
      case 'country':
          placeHolder = 'country';
          break;
      case 'shape':
          placeHolder = 'shape';
          break;
      default:
          placeHolder = '';
  }
  d3.select("input").attr("placeholder", placeHolder);
  d3.select("label")
    .attr("for",filterValue)
    .text(`Enter a value for  ${filterValue.toUpperCase()}`);

  
});


// Complete the click handler for the form
button.on("click", handleClick);
function handleClick() {
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#searchinput");
  // Get the value property of the input element
  let inputText = inputElement.property("value");

  console.log(inputText);
  // Use the form input to filter the data 
  var value = d3.select("label").attr("for");
  // retain only those people whose .bloodtype equals the input text
  let matches = ufo.filter(search => search[value] === inputText.toLowerCase());

  console.log(matches);
  autoPopulate(matches)
};

