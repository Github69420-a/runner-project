
var character_running;
var char;
var path;
var road;
var wall1;
var wall2;
var wall3;
var invisibleWallLeft;
var invisibleWallRight;
function preload(){
  //pre-load images
  character_running = loadAnimation("Runner-1.png", "Runner-2.png");
  path = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //road
  road = createSprite(200, 200);
  road.addImage("background", path);
  road.scale = 1.2;
  //character
  char = createSprite(300, 300, 50, 50);
  char.addAnimation("character", character_running);
  char.scale = 0.08
  // invisible walls
  invisibleWallLeft = createSprite(0, 0, 5, 800);
  invisibleWallLeft.visible = false;
  invisibleWallRight = createSprite(400, 0, 5, 800);
  invisibleWallRight.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  road.velocityY = 4;
  char.x = mouseX;
  char.collide(invisibleWallLeft);
  char.collide(invisibleWallRight);
  if (road.y > 600)// 600
  {
    road.y = height / 2;
  }
}
