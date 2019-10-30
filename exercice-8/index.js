/**BatlleShip */

var GridSize = 35;


var BoardContainer = document.getElementById("gameboard");
var ship = document.getElementById('ships');
var ships = [0, 2, 3, 4, 5, 5]
var array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// make the grid columns and rows
for (i = 0; i < 12; i++) {
    for (j = 0; j < 12; j++) {

        // create a new div HTML element for each grid square and make it the right size
        var square = document.createElement("div");
        BoardContainer.appendChild(square);

        // div element give unique ID 
        square.id = array[i] + j;

        // row or column number with Size
        var topPosition = j  * GridSize;
        var leftPosition = i * GridSize;

        // positioning grid square 
        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';
    }
}


var gameBoard = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

/*
function aim(){

}*/
    


