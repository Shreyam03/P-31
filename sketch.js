const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,d1,d2,d3,d4;
var particles=[];
var pinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground();
}

function draw() {
  background("cyan");  
  drawSprites();
  Engine.update(engine);
  ground.display();
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  for(var j=40;j<=width;j=j+50){
    pinkos.push(new Pinko(j,75))
  }
  for(var j=15;j<=width-10;j=j+50){
    pinkos.push(new Pinko(j,175))
  }
  for(var j=0;j<pinkos.length;j++){
    pinkos[j].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
}