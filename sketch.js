var llama;
var water;
var log2;
var x = 0
var y = 0
var speed = 10
var yLog = 0;
function preload(){
  llama = loadImage("Loot_Llama.png")
  water = loadImage("water background.jpg")
  log2 = loadImage("log2.png")
}

function setup() {
  createCanvas(windowWidth-20, windowHeight-20)
}

function draw() {
  background(water)
  image(llama, x, y, 100, 100);
  log(200);
  yLog++;


}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
   x+= speed;
 }
  else if (keyCode == LEFT_ARROW) {
   x-= speed;
 }
 else if(keyCode == DOWN_ARROW) {
   y+= speed;
 }
  else if (keyCode == UP_ARROW) {
   y-= speed;
 }
 if(x>width-20){
   x=width-20;
 }
 else if(x<0){
   x=0;
 }
 else if(y<0){
   y=0;
 }
 else if (y>height){
   y=height;
 }
}

function log(xLog) {
  image(log2, xLog, height - yLog, 150, 100)
}
