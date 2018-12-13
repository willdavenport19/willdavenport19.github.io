var y = 590;
var x = 600;
var speedY = -10;
var speedX = 10;
var speed = 10;
var ballW = 15;
var ballH = 15;
var ballX = 600;
var ballY = 590;
var rectX = 0;
var rectY = 600;
var paddleX = 0;
var paddleY = 50;
var gal;
var brick1;
var bricks = [];
var isGameOver = false;

function preload(){
  gal = loadImage("Galazy.jpg");
}

function setup() {
  createCanvas(1350, 800)
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 5; j++) {
      bricks.push(new Brick(i * 90, j * 45 + 190));
    }
  }
}

function draw() {
  if(isGameOver == false) {
    player2();
    rectX = mouseX;
    y+= speedY;
    x+= speedX;
    background(gal)
    fill(mouseX/4, 200, 200)
    rect(mouseX, 600, 100, 10)
    fill(27, 149, 173)
    ellipse(x, y, ballW, ballH);
    wall();
    checkPaddle()
    for (var i = 0; i < bricks.length; i++) {
      fill(mouseX/4, 39, 120)
      bricks[i].display();
    }
    checkGameOver();
  }
  else {
    gameOver();
  }
}

function checkGameOver() {
  if(y > 650) {
    isGameOver = true;
  }
}

function checkPaddle() {
  fill(mouseX/4, 200, 70);
  rect(rectX, rectY, 100, 10);
  if (x > rectX  && x < rectX + 100 && y > rectY && y < height) {
    speedY *= -1;
  }
  rect(paddleX, paddleY, 200, 10);
  if (x > paddleX && x < paddleX + 200 && y > paddleY && y < paddleY + 10) {
    speedY *= -1;
  }
}

function wall() {
  if(y < 0) {
    isGameOver = true;
  }
  if(x > 1350) {
    speedX = -10;
  }
  if(x < 0) {
    speedX = 10;
  }
  // if(y < rectY) {
  //   speedY = -5;
  //   speedX = -5;
  // }
}
function gameOver() {

  background(0)
  textSize(65);
  fill(255);
  text("Game Over!", 500, 400)
  textSize(40);
  fill(255);
  text("Press R to play again!", 480, 450)
  fill(0);
}
function keyTyped() {
  if(key === "r") {
    x = 600;
    y = 590;
    speedY = -5;
    speedX = 5;
    isGameOver = false;
  }
}
function player2() {
  rect(paddleX, paddleY, 200, 10);
  if (keyIsDown(RIGHT_ARROW)) {
    paddleX+= speed;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    paddleX-= speed;
  }
}

function Brick(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(random(255), random(255), random(255))
  this.display = function() {
    rect(this.x, this.y, 90, 45)
  }
  this.checkForBall = function() {
  }
}
