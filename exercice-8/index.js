/**BatlleShip */

var GridSize = 35;
var Board = document.getElementById("gameboard");
var ship = document.getElementById('ships');
var ships = [0, 2, 3, 4, 5, 5];
var array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// create grid
for (i = 0; i < 12; i++) {
    for (j = 0; j < 12; j++) {

        // create a new div HTML element for each grid square and make it the right size
        var tab = document.createElement("div");
        Board.appendChild(tab);

        // div element give unique ID 
        tab.id = array[i] + j;

        // row or column number with Size
        var rowPosition = j  * GridSize;
        var columnPosition = i * GridSize;

        //positioning grid square 
        tab.style.top = rowPosition + 'px';
        tab.style.left = columnPosition + 'px';
    }
}

//matrix 0 = no ships number = ships
var InsertBoard = [
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

Board.addEventListener("click",aim, false);
//function click color
function aim(){

}

