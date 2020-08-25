
var fixedRect,movingRect;
var gameObject1, gameObject2, gameObject3;
function setup() {
  createCanvas(1200,400);
  //fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);

  //gameObject1 = createSprite(600,200,30,50);
  gameObject2 = createSprite(800,200,30,50);
 // gameObject3 = createSprite(1000,200,30,50)
  //15 + 25 = 40

 // fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  //gameObject1.shapeColor = "red";
  gameObject2.shapeColor = "red";
 // gameObject3.shapeColor = "red";

  

  gameObject2.velocityX = -5;
  movingRect.velocityX = 5;
}


function draw() {
  background(255,255,255);  
  // movingRect.x = mouseX;
  // movingRect.y =  mouseY;

  // console.log(movingRect.x - fixedRect.x);

 
  // if(isTouching(movingRect,gameObject1))
  // {
  //   gameObject1.shapeColor = "green";
  //   movingRect.shapeColor = "green";
  // }   
  // else{
  //  gameObject1.shapeColor = "red";
  //   movingRect.shapeColor = "red";
  // }


  bounceOff(movingRect,gameObject2);



  drawSprites();
}


