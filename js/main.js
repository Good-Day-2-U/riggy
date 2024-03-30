// IMPORTS //

import {changeBackGround} from './changeBackground.js';

// EXPORTS //




let clickCount = 0;

let countRunning = true;

let score = document.querySelector('.score')

let scoreCount = 0;

let box1 = document.querySelector('#m1');
let box2 = document.querySelector('#m2');
let box3 = document.querySelector('#m3');
let box4 = document.querySelector('#m4');

let timer = document.querySelector('#timer');


// Game Variables

const maxScore = 10000

let timerStop = false



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

box1.addEventListener('click', changeColor);
box2.addEventListener('click', changeColor);
box3.addEventListener('click', changeColor);
box4.addEventListener('click', changeColor);

function changeColor(event) {
  let element = event.target

  if(element == box1 && scoreCount >= 1000 && element.style.backgroundColor != 'black') {
    element.style.backgroundColor = "black";
    element.innerHTML = '+5';
    countRunning = true;

    scoreCount -= 1000;

    startElements()

  } else if(element == box2) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+10'
    countRunning = true;

    startElements()


  } else if(element == box3) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+25'
    countRunning = true;

    startElements()
  
  
  } else if(element == box4) {
    element.style.backgroundColor = "black";
    element.innerHTML = '+100'
    countRunning = true;
  
    startElements()
  
  }

  console.log(ogBoxOne.innerHTML);
}

// RESET BUTTON

const resetButton = document.querySelector('#resetButton');

resetButton.classList.add('animation360Spin')

function resetElements() {
  box1.style = ogBoxOne.style;
  box1.innerHTML = ogBoxOne.innerHTML;

  box2.style = ogBoxTwo.style;
  box2.innerHTML = ogBoxTwo.innerHTML;

  box3.style = ogBoxThree.style;
  box3.innerHTML = ogBoxThree.innerHTML;

  box4.style = ogBoxFour.style;
  box4.innerHTML = ogBoxFour.innerHTML;

  scoreCount = 0;

  elapsedTime = 0;

  countRunning = true;
  timerStop = false;

  console.log("RESET");
}

resetButton.addEventListener('click', function() {
  resetElements();
  changeBackGround();
});

//  STOP BUTTON

const stopButton = document.querySelector('#stopButton')

let stopElements = function() {
  if(timerStop == false) {
    countRunning = false;
    console.log('countRunning == false');
    timerStop = true;
    console.log('timerStop == true');
  }
}

stopButton.addEventListener('click', stopElements);

//  START BUTTON

const startButton = document.querySelector('#startButton') 

let startElements = function() {
  if(timerStop == true) {
    countRunning = true;
    console.log('countRunning == true');
    timerStop = false;
    console.log('timerStop == false');
    lastTime = performance.now();
  }
}

startButton.addEventListener('click', startElements);

//  SPEND BUTTON

const spendButton = document.querySelector('#spendButton') 


let spendScore = function() {
  if(scoreCount >= 200) {
    scoreCount -= 200;
  }
}

spendButton.addEventListener('click', spendScore);




// Upgrades----------------------------//

let upgradeEffects = function() {
  // switch statement for upgrades
}






// Game Logic ---------------------------------------------------------------------------//

let lastTime = 0;
let elapsedTime = 0;
let displayTime = 0;

// Timer Logic ---------------

let elapsedTimeReset = false; // Flag to indicate if elapsedTime has been reset

function updateTimer() {
  displayTime = elapsedTime;

  if (displayTime >= 10) {
    if (!elapsedTimeReset) { // Check if elapsedTime has been reset
      elapsedTime -= 10; // Reset elapsedTime
      elapsedTimeReset = true; // Set the flag
      resetElements();
    }
  } else {
    elapsedTimeReset = false; // Reset the flag when displayTime is less than 10
  }
  
  timer.innerHTML = displayTime;
}



function gameLoop() {
  // Update game stateA



  // Timing --------------------------------//

  let currentTime = performance.now();
  let deltaTime = currentTime - lastTime;
  if(timerStop == false) {
    elapsedTime += (deltaTime / 1000);
  }
    // console.log('elapsedTime:', elapsedTime);

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

  
  
  if(timerStop == false) {
    updateTimer()
  }

  console.log(elapsedTime)

  upgradeEffects()
  
  


  // Update lastTime for next iteration
  lastTime = currentTime;
  
  // Render game
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();