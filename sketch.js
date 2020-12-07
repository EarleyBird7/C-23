var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,block1,block2,block3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 500, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	blocka=createSprite(width/2,650,200,10);
	blocka.shapeColor="red"
	blockb=createSprite(300,575,10,150);
	blockb.shapeColor="red"
	blockc=createSprite(500,575,10,150);
	blockc.shapeColor="red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 block1=Bodies.rectangle(width/2,650,200,10,{isStatic:true});
	 World.add(world, block1)

	 block2=Bodies.rectangle(300,575,10,200,{isStatic:true});
	 World.add(world, block2)

	 block3=Bodies.rectangle(500,575,10,200,{isStatic:true});
	 World.add(world, block3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
	packageSprite.x=packageBody.position.x;
	packageSprite.y=packageBody.position.y;
  }
}



