// empty arrays to fill with random x and y positions
var xPos = [];
var yPos = [];
// max amount of snowflakes allowed at once
var snowflakeCount = 100;
// counter to determine when to add new snowflakes
var count = 0;
let w = ["Brr...I'm Cold", "It's Freezing!"]
let index = 0

function setup() {
  createCanvas(400, 400);
  // iterate through the snowflakeCount:
  for (var i = 0; i < snowflakeCount; i++){
    // push random x and y positions back into the arrays
    xPos.push(random(width));
    yPos.push(random(-height));
  }
  setTimeout(() => {
    setInterval(changeWords, 1000)
  }, 2000);
}

function draw() {
  background(70, 150, 255, 200);

  // call and draw snowman/snowflake functions
  snowman();
  snowflake();
  // increment the count each frame
  count++;
  textAlign(CENTER, CENTER)
  textSize(30)
  fill(255)
  strokeWeight(7)
  stroke(31, 85, 255,)
  text(w[index], 200, 150)
}

function changeWords(){
  index++;
  if(index >= w.length) {
    index = 0;
  }
}

function snowflake() {
  fill(255, 255, 255);
  stroke(255);
  strokeWeight(2)

  // iterate through the random positions in xPos array:
  for (var i = 0; i < xPos.length; i++){
    // draw snowflakes at the i'th position in xPos array
    ellipse(xPos[i], yPos[i], 5, 5);
    // increment the snowflake's yPos to move it down the canvas
    yPos[i] = yPos[i] + 1;
    // if the yPos of the snowflake exceeds the height of the canvas:
    if (yPos[i] > height) {
      yPos[i] = random(-50, 0); // reset snowflake to -50 px above canvas height
      xPos[i] = random(width);  // reset snowflake to random pos within canvas width
    }
  }

  // if the count is a multiple of 10 (divisible by 10 with no remainder)
  // and number of snowflakes hasn't exceeded the max snowflake count:
  if (count % 10 === 0 && xPos.length < snowflakeCount) {
    // push back a new random position for a snowflake to be drawn at
    xPos.push(random(width));
    yPos.push(random(-50));
  } 
  // otherwise, if snowflake positions exceed the max snowflake's allowed:
  else if (xPos.length > snowflakeCount) {
    // remove the first snowflake position's from the array (delete first snowflake)
    xPos.shift();
    yPos.shift();
  }
}

function snowman(){
  // snowman body
  stroke(0, 0, 0);
  strokeWeight(1)
  fill(255, 255, 255);
  circle(200, 350, 100);
  circle(200, 270, 75);
  // snowman eyes
  fill(0, 0, 0);
  circle(190, 270, 8);
  circle(210, 270, 8);
  // snowman nose
  fill(255, 165, 0);
  triangle(202, 280, 150, 285, 202, 295);
  // snowman hat
  fill(0, 0, 0);
  ellipse(200, 240, 100, 20); // brim
  rect(175, 185, 50, 50);     // top
  fill(255, 0, 0);
  ellipse(200, 230, 50, 15);  // ribbon
  fill(0, 0, 0);
  ellipse(200, 225, 50, 15);  // ribbon
  // snowman buttons
  fill(0, 0, 0);
  circle(200, 350, 8);
  circle(200, 330, 8);
  circle(200, 370, 8);
  // snowman arms
  fill(44, 38, 31);
  quad(160, 340, 130, 290, 130, 280, 160, 330);
  quad(240, 340, 270, 290, 270, 280, 240, 330);
}
