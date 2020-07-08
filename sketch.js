const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,engine,world,dustbin,paper;
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 dustbin = new DustBin(900,595,150,10);
  paper = new Paper(100, 300, 10);
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(width / 2, 600, 1000, 10, options);
  ground.width = 1000;
  ground.height = 10;
  World.add(world, ground);
}

function draw() {
  background(0);
  rectMode(CENTER);
    dustbin.display();
    paper.display();
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,ground.width,ground.height);
    
  
  }
  function keyPressed(){
  if (keyCode === UP_ARROW) {
    console.log("if");
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 19,
      y: -17
    });
  }
}