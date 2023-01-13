// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>🔥Drawing with JS 🔥</h1>`;

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

//This for loop draws 5 squares - width property adjusts square width 
// The nexted loop creates an even grid of squares

for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    let width = 60;
    let height = 60;
    let gap = 20;
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x,y,width,height);
    context.stroke();
    //this conditional changes how and when the inner square is drawn
    if(Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();
    }
  }
}

//context.fillStyle = "orange";
//context.fillRect(100, 100, 400, 400);

/* //Code below creates a square and circle
context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();
*/

