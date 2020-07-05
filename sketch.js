var fixedRect, movingRect;
var ball1, ball2;
var ball3, ball4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball1 = createSprite(100,200,30,30);
  ball1.shapeColor = "red";
  ball2 = createSprite(300,200,30,30);
  ball2.shapeColor = "red";
  ball3 = createSprite(100,100,30,30);
  ball3.shapeColor = "blue";
  ball4 = createSprite(300,100,30,30);
  ball4.shapeColor = "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ball1.velocityX = 3;
  ball2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  
  Bounceoff(ball1, ball2);
  if(Istouching(ball3, ball4)){
    ball3.shapeColor = "green";
    ball4.shapeColor = "green";
  }
  drawSprites();
}