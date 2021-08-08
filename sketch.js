
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
let engine;
let world;

var roof,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var ball_options = {
		restitution: 0.95,
		isStatic:false
	}
	var roof_options = {
		isStatic:true
	}
	var option1 = {
		
		pointA:{x:200,y:0},
		bodyB:ball1,
	
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  }
	//Create the Bodies Here.
	roof = Bodies.rectangle(400,100,500,50,roof_options)
    ball1 = Bodies.circle(200,600,30,ball_options);
	World.add(world,ball1);
	ball2 = Bodies.circle(300,600,30,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(400,600,30,ball_options);
	World.add(world,ball3);
	ball4 = Bodies.circle(500,600,30,ball_options);
	World.add(world,ball4);
	ball5 = Bodies.circle(600,600,30,ball_options);
	World.add(world,ball5);
    //creating the ropes
	rope1 = Constraint.create(option1);
	World.add(world,rope1);

	Engine.run(engine);
    Start();
}


function draw() {
	
  rectMode(CENTER);
  background("darkmagenta");
  ellipse(ball1.position.x,ball1.position.y,100);
  ellipse(ball2.position.x,ball2.position.y,100);
  ellipse(ball3.position.x,ball3.position.y,100);
  ellipse(ball4.position.x,ball4.position.y,100);
  ellipse(ball5.position.x,ball5.position.y,100);
  rect(400,100,500,50)
  line(rope1.pointA.x,rope1.pointA.y,ball1.position.x,ball1.position.y)
  drawSprites();
  Engine.update(engine);
}

function Start(){
	Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0});
}


