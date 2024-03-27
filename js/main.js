let clickCount = 0;

let countRunning = true;

let score = document.querySelector('.score')

let scoreCount = 0;

let box1 = document.querySelector('#m1');
let box2 = document.querySelector('#m2');
let box3 = document.querySelector('#m3');
let box4 = document.querySelector('#m4');


// Object

// const ogM1 = {
//   bgColor : 'blue',
//   text : '1',
// }

// Class

class OGm1 {
  constructor(ogStyle, ogText) {
    this.style = ogStyle;
    this.innerHTML = ogText;
  }
}

const ogBoxOne = new OGm1(box1.style, box1.innerHTML)
const ogBoxTwo = new OGm1(box2.style, box2.innerHTML)
const ogBoxThree = new OGm1(box3.style, box3.innerHTML)
const ogBoxFour = new OGm1(box4.style, box4.innerHTML)

let changeColor = function(element) {
  element.style.backgroundColor = "black";
  // element.innerHTML = '0'
  if(element == box1) {
    element.innerHTML = '+5';
  } else if(element == box2) {
    element.innerHTML = '+50'
  } else if(element == box3) {
    element.innerHTML = '+500'
  } else if(element == box4) {
    element.innerHTML = '+5000'
  }

  console.log(ogBoxOne.innerHTML);
} 


// RESET BUTTON

const resetButton = document.querySelector('#resetButton');

let resetElements = function() {
  box1.style = ogBoxOne.style;
  box1.innerHTML = ogBoxOne.innerHTML;

  box2.style = ogBoxTwo.style;
  box2.innerHTML = ogBoxTwo.innerHTML;

  box3.style = ogBoxThree.style;
  box3.innerHTML = ogBoxThree.innerHTML;

  box4.style = ogBoxFour.style;
  box4.innerHTML = ogBoxFour.innerHTML;

  scoreCount = 0;
  countRunning = true;

  console.log("RESET");
}

let stopElements = function() {
  if(countRunning == true) {
    countRunning = false;
    console.log('countRunning == false');
  }
}

// Game Logic

function gameLoop() {
  // Update game state
  if(countRunning == true){
    if(box1.style.backgroundColor === 'black' && box2.style.backgroundColor === 'black' && box3.style.backgroundColor === 'black' && box4.style.backgroundColor === 'black') {
    scoreCount += 0;
    } else {

      if(box1.style.backgroundColor === 'black') {
        scoreCount += 5;
      } 
      
      if(box2.style.backgroundColor === 'black') {
        scoreCount += 50;
      } 
      
      if(box3.style.backgroundColor === 'black') {
        scoreCount += 500;
      } 
      
      if(box4.style.backgroundColor === 'black') {
        scoreCount += 5000;
      }
      
    }
  }


  // scoreCount += 1;

  score.innerHTML = scoreCount;

  // Render game
  
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
