var movingBlock, fixedBlock;
var object1, object2;
var trex, obstacle;

function setup() {
  createCanvas(800,400);

  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(700, 200, 50, 50);

  trex = createSprite(20, 200, 50, 50);
  obstacle = createSprite(30, 200, 50, 50);

}

function draw() {
  background(255,255,255); 

  //movingBlock.x = mouseX;
  //movingBlock.y = mouseY;

  trex.x = mouseX;
  trex.y = mouseY;

  if(isTouching(movingBlock, fixedBlock)){
        fixedBlock.shapeColor = "red";
        movingBlock.shapeColor = "red";
  }else{
    fixedBlock.shapeColor = "black";
    movingBlock.shapeColor = "black";
  }

  if(isTouching(trex, obstacle)){
    obstacle.shapeColor = "blue";
    trex.shapeColor = "blue";
}else{
  obstacle.shapeColor = "red";
  trex.shapeColor = "red";
}
  drawSprites();
}

