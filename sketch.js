
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

 


  var holder_options={
    isStatic: true
  }

holder = Bodies.rectangle(200,100,100,20,holder_options);

World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(40,100,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("white");
}


function draw() {
  background(225); 
  Engine.update(engine);


  

  fill ("blue");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);



fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("black");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




}








