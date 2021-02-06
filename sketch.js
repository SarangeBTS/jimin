
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground;
var side1,side2,side3;

function preload()
{
	dustbin1=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new PAPER(100,100,70)
	ground=new GROUND();
	side1=new Dustbin(520,600,10,128)
	side2=new Dustbin(720,600,10,128)
	side3=new Dustbin(620,655,192,12)


	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("yellow");


  paper1.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();

  image(dustbin1,620,550,240,240)
}



function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.6,y:-0.7})
	}
	}




