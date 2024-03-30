let mainBackground = document.querySelector('.gameBody')

let mainBackgroundTemp = mainBackground

let mbtColor = mainBackgroundTemp.style.backgroundColor

export function changeBackGround() {
  
  switch(mbtColor) {
    case 'white': 
      mbtColor = 'black'
      break;

    case 'black':
      mbtColor = 'white'
      break;

    case 'red':
      mbtColor = 'white'
      break;
  
    default:
      mbtColor = 'red'
  }

  console.log("COLOR CHANGED")
  
  mainBackground.style.backgroundColor = mbtColor;
}