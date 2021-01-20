
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobj,paperobj,dustbinobj;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj= new ground(width/2,670,width,20);
	paperobj= new paper(100,450,40);
	dustbinobj = new dustbin(1000,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  
  groundobj.display();
  paperobj.display();
  dustbinobj.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
  
	}
}


