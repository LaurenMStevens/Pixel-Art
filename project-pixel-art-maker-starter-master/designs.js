// Select color input

var colorPicker = document.querySelector('#colorPicker');

// Select size input

var table = document.getElementById('pixelCanvas');

var sizePicker = document.getElementById('sizePicker');

//Add event listener to Size Picker to allow the user to
//interact with the table specifications.
// When size is submitted by the user, call makeGrid().


sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    var height = document.querySelector('#inputHeight').value;
    var width = document.querySelector('#inputWidth').value;
    makeGrid(height,width);
});

//Clear any previous table data on 'submit'

//Nested loop will loop through rows and columns to
//construct table based on height/width input from user.

//Adding event listener to table to allow user to
//modify cell color based on input

function makeGrid(height,width) {
    table.innerHTML = null;
    for (var i = 0; i < height; i++){
        var row = table.insertRow(i);
        for (var j = 0; j < width; j++){
        var column = row.insertCell(j);
        }
    }
    table.addEventListener('click', function(event) {
        event.target.style.backgroundColor = colorPicker.value
    })

};


