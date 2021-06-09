// Select color input
var colorPicker = document.querySelector('#colorPicker');

// Select size input
var table = document.getElementById('pixelCanvas');


var sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    var height = document.querySelector('#inputHeight').value;
    var width = document.querySelector('#inputWidth').value;
    makeGrid(height,width);
});

// When size is submitted by the user, call makeGrid()


function makeGrid(height,width) {
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



