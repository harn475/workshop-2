var xPos = [];
var yPos = [];

function setup() {
  createCanvas(400, 400);

  for(var i = 0; i < 50; i++){
    xPos.push(random(400));
    yPos.push(random(400));
  }
}

function draw() {
  background(70, 150, 255, 200);
  snowman();
  snowflake();
}

function snowman(){
  stroke(0, 0, 0);
  fill(255, 255, 255);
  circle(200, 350, 100);
  circle(200, 270, 75);

  fill(0, 0, 0);
  circle(190, 270, 8);
  circle(210, 270, 8);

  fill(255, 165, 0);
  triangle(202, 280, 150, 285, 202, 295);

  fill(0);
  ellipse(200, 240, 100, 20);
  rect(175, 185, 50, 50);

  fill(255, 255, 255);
  ellipse(200, 230, 50, 15);
  
  fill(0, 0, 0);
  ellipse(200, 225, 50, 15);

  fill(0, 0, 0);
  circle(200, 350, 8);
  circle(200, 330, 8);
  circle(200, 370, 8);

  fill(139, 69, 19);
  
  quad(160, 340, 130, 290, 130, 280, 160, 330);
  quad(240, 340, 270, 290, 270, 280, 240, 330);
}

function snowflake() {
  fill(255, 255, 255);
  stroke(255, 255, 255);
  for (var i = 0; i < 100; i++){
    for (var j = 0; j < xPos.length; j++){
      ellipse(xPos[j], yPos[j], 5, 5);
    }
  }
}