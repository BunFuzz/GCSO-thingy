var car,wall;
var speed,weight;
var gameState="PLAY";
var restart;




function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 100, 50);
  wall=createSprite(600,200,60,height/2);
  restart=createSprite(750,200,50,50);
}

function draw() {
  background("black");  
  fill("white");
  text("speed:",50,100);
  text(speed,100,100);
  text("weight:",50,50);
  text(weight,100,50);
  

  if(gameState==="PLAY"){
    car.velocityX=speed;
    restart.visible=false; 
    if(wall.x-car.x<(car.width+wall.width)/2){
      car.velocityX=0;
      gameState="END";
      var deformation= 0.5 * weight * speed * speed/22500
      if (deformation>180){
        car.shapeColor=color(255,0,0);
      }
      if (deformation<180 && deformation>80){
        car.shapeColor=color(230,230,0);
      }
      if (deformation<80){
        car.shapeColor=color(0,255,0);
      }


    }
  }
  
  
  

  drawSprites();
  if(gameState==="END"){
    restart.visible=true;
    text("Press dis to restart",680,150);
    if(mousePressedOver(restart)){
      reset();
      gameState="PLAY";
    }
  }
}

function reset(){
  car.x=50;
  car.velocityX=speed;
  speed=random(55,90);
  weight=random(400,1500);
  
}