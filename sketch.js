var spacecraft;   
var backgrounvar ;
var iss;
var hasdocked=false;
function preload(){
iss1=loadImage("Docking-undocking/iss.png")
spacecraft1=loadImage("Docking-undocking/spacebg.jpg")
spacecraftno=loadImage("Docking-undocking/spacecraft1.png")
spacecraftboth=loadImage("Docking-undocking/spacecraft2.png")
spacecraftleft=loadImage("Docking-undocking/spacecraft3.png")
spacecraftright=loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);


  iss=createSprite(400,200,20,20)
  iss.addImage(iss1)



spacecraft= createSprite(400, 200, 50, 50);
spacecraft.addImage(spacecraftno)
spacecraft.scale=0.25


}

function draw() {
  background(spacecraft1); 

  drawSprites();
  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    
  if(keyDown("down")){
    spacecraft.y+=5
  }
  if(keyDown("left")){
    spacecraft.addImage(spacecraftleft)
    spacecraft.x-=5
   
  }
  if(keyDown("right")){
    spacecraft.x+=5
    spacecraft.addImage(spacecraftright)
  }
if(keyDown("up")){
  spacecraft.y-=5
  spacecraft.addImage(spacecraftboth)
}



}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasdocked=true
  textSize(20)
  text("Docking sucessfull",400,200)
}
}