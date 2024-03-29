// import {updateTimer} from './timer.js';



let clickCount = 0;

let countRunning = true;

let score = document.querySelector('.score')

let scoreCount = 0;

let box1 = document.querySelector('#m1');
let box2 = document.querySelector('#m2');
let box3 = document.querySelector('#m3');
let box4 = document.querySelector('#m4');


// Game Variables

const maxScore = 10000



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
  if(element == box1 && scoreCount >= 1000 && element.style.backgroundColor != 'black') {
    element.style.backgroundColor = "black";
    element.innerHTML = '+5';
    countRunning = true;

    scoreCount -= 1000;

  } else if(element == box2) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+10'
    countRunning = true;


  } else if(element == box3) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+25'
    countRunning = true;
  
  
  } else if(element == box4) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+100'
    countRunning = true;
  
  
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

let spendScore = function() {
  if(scoreCount >= 750) {
    scoreCount -= 500;
  }
}


let upgradeEffects = function() {
  // switch statement for upgrades
}






// Game Logic ---------------------------------------------------------------------------//

let lastTime = performance.now();
let elapsedTime = 0;
let varTime = 0;
let displayTime = 0;

// Timer Logic ---------------


let timer = document.querySelector('#timer');

function updateTimer() {

  displayTime = varTime

  if(displayTime >= 10) {
    displayTime -= 10;
  }

  timer.innerHTML = (displayTime.toFixed(2));
}


function gameLoop() {
  // Update game state



  // Timing --------------------------------//

  let currentTime = performance.now();
  let deltaTime = currentTime - lastTime;
  elapsedTime += (deltaTime / 1000);
  console.log('elapsedTime:', elapsedTime);

  varTime = elapsedTime;
  console.log('varTime:', varTime);
  console.log('displayTime:', displayTime);



  //----------------------------------------// 




  if(countRunning == true){
    if(box1.style.backgroundColor === 'black' && box2.style.backgroundColor === 'black' && box3.style.backgroundColor === 'black' && box4.style.backgroundColor === 'black') {
    countRunning = false;
    } else {

      scoreCount += 1;

      if(box1.style.backgroundColor === 'black') {
        scoreCount += 5;
      } 
      
      if(box2.style.backgroundColor === 'black') {
        scoreCount += 10;
      } 
      
      if(box3.style.backgroundColor === 'black') {
        scoreCount += 25;
      } 
      
      if(box4.style.backgroundColor === 'black') {
        scoreCount += 100;
      }
      
    }
  }


  score.innerHTML = scoreCount;

  if(scoreCount >= maxScore) {
    score.innerHTML = maxScore;
    countRunning = false;
    scoreCount = maxScore;
  }

  
  
  
  updateTimer()

  upgradeEffects()
  
  


  // Update lastTime for next iteration
  lastTime = currentTime;
  
  // Render game
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();