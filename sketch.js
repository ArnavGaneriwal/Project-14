
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, leftSide, rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1300, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.25,
		friction:0,
		density:1.2
	}
	fill("white");
	ball = Bodies.circle(260,300,20,ball_options);
	World.add(world,ball);
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(900,600,20,120);
	keyPressed();
	ellipseMode(RADIUS)
	rectMode(CENTER);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-100});
	}
}



