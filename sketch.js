var gameState= "start";
var bg;
var backgroundImg;
var ground;
var penguin;
var ObstacleImg1, ObstacleImg2,  ObstacleImg3;
var penguin_walking, penguin_collided;


function preload(){
  penguin_walking = loadAnimation("P1.png","P3.png","P2.png","P3.png");
//penguin_collided = loadImage("");
  ObstacleImg1 = loadImage("Obstacle1.png");
  ObstacleImg2 = loadImage("Obstacle2.png");
  ObstacleImg3 = loadImage("Obstacle3.png");
  backgroundImg = loadImage("Antarctica.jpg");

}

function setup(){
 createCanvas(windowWidth,windowHeight);

 bg=createSprite(width/2,height/2,4*width,height);
  bg.addImage("Image",backgroundImg);
  bg.x = width/2 ;
  bg.velocityX = -5;
 

 penguin = createSprite(50,height-52,20,20);
 penguin.addAnimation("walking",penguin_walking);
 penguin.scale = 0.5;


 

 ground = createSprite(width/2,height-50,width*2,5);
 ground.velocityX = -1;
  ground.x = width/2 ;
  ground.visible = false;

              


}

function draw(){
background(backgroundImg);
penguin.collide(ground);
if (ground.x<0) {
  ground.x= ground.width/2
}

if(bg.x<0){
  bg.x = width/2
}


penguin.collide(ground);

drawSprites()

}

