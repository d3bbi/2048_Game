
import { moveRight, moveLeft, moveUp, moveDown} from './movement.js';


document.addEventListener("DOMContentLoaded", () => {
 

  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.querySelector("#score");
  const resultDisplay = document.getElementById("result");
  const width = 4;
  let squares = [];

  //create a playing board

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      let square = document.createElement("div");
      square.innerHTML = 0;
      square.setAttribute("class", i); // REMOVE !!
      gridDisplay.appendChild(square);
      squares.push(square);
    }
  }

  createBoard();
  generate();
  generate();

  //generate a number randomly
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else {
      generate();
    }
  }


  function combineRow(){
    for (let i=0; i< 15; i++){
      if(squares[i].innerHTML === squares[i + 1].innerHTML){
        let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = combineTotal;
        squares[i + 1].innerHTML = 0;
      }
    }
  }


  //assign keycode
  function control(e){
    if(e.keyCode === 39){
      keyRight();
    } else if (e.keyCode === 37){
      keyLeft();
    } else if(e.keyCode === 40){
      keyDown();
    }
  }

  document.addEventListener('keyup', control);

  function keyRight(){
    moveRight(squares);
    combineRow();
    moveRight(squares);
    generate();
  }

  function keyLeft(){
    moveLeft(squares);
    combineRow();
    moveLeft(squares);
    generate();
  }

  function keyDown(){
    moveDown(squares);
    combineRow();
    moveDown(squares);
    generate();
  }



});
