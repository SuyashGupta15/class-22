 var canvas;

 const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;

var engine,world,ground,ground_options,ball_options;

function setup() {
  canvas=createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;
  

  ground_options = { isStatic: true }

  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  ball_options = { restitution: 1.0 }

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ground);
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background("gold"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}