'use strict';
/**Morpion JS  **/
var countX = 0;
var countO = 0;


//create grid morpion with div
function GridCreate() {
  var elBody = document.querySelector('body');
  var elDiv = document.createElement('div');

  for (var i = 0; i < 3; i++) {
    var elDiv = document.createElement('div');
    elDiv.setAttribute('id', 'container');
    for (var j = 0; j < 3; j++) {
      var elBut = document.createElement('div');
      elDiv.appendChild(elBut);
      elBut.style.background = '#E0E1E1';
      elBut.style.padding = '50px';
      elBut.style.cursor = 'pointer';

      elBut.setAttribute('class', 'case');
    }
    elBody.appendChild(elDiv);

    elDiv.style.display = 'flex';
    elDiv.style.justifyContent = 'center';
  }
}
GridCreate();

//select case 
var cases = document.querySelectorAll(".case");

//check Cases
var t = 0;

function tour() {
  t++;
  return t % 2 === 0 ? "O" : "X";
}
//Count
function count() {

}
// ShowWinner and (try count points winner)

function showWin(Win) {
  if (Win === "X") {
    countX++;
    if (countX === 3) {
      alert("Joueur X à Gagné");
      window.location.reload();
    }
  }
  else {
    if (Win === "O") {
      countO++;
      if (countO === 3) {
        alert("Joueur O à Gagné");
        window.location.reload();
      }
    }
  }
  alert(Win + " a gagné")

}
// Valid win 
function Win() {
  if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML)
    showWin(cases[0].innerHTML);

  else if (cases[3].innerHTML !== "" && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML)
    showWin(cases[3].innerHTML);

  else if (cases[6].innerHTML !== "" && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML)
    showWin(cases[6].innerHTML);

  else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML)
    showWin(cases[0].innerHTML);

  else if (cases[2].innerHTML !== "" && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML)
    showWin(cases[2].innerHTML);

  else if (cases[0].innerHTML !== "" && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML)
    showWin(cases[0].innerHTML);

  else if (cases[1].innerHTML !== "" && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML)
    showWin(cases[6].innerHTML);

  else if (cases[2].innerHTML !== "" && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML)
    showWin(cases[6].innerHTML);
  else if (t === 9) {
    alert("match nul");
    window.location.reload();
  }
}


// play and can't swap symbol 
function play() {
  if (!this.innerHTML) this.innerHTML = tour();
  Win();

}

cases.forEach(el => el.addEventListener("click", play));
