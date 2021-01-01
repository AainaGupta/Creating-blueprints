const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,ground,box2;

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  box1= new Box(525,400,40,60);
  box2= new Box(500,500,40,60);
  ground= new Ground(400,750,800,20);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  box1.display();
  ground.Display();
  box2.display();
}