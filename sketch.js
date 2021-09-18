
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bg, Bgimg;
var racket1, racket2;
var In1, In2, In3, In4;


function preload(){
  Bgimg=loadImage("vector-illustration-green-wooden-table-260nw-321369812.jpg");
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	Bg = createSprite(400,350);
	Bg.addImage("tableTennis",Bgimg);
	Bg.scale = 1.9;

	racket1 = createSprite(400,60,80,40);
	racket1.shapeColor="orange"
	racket1.velocityX = 0;

	racket2 = createSprite(400,560,80,40);
	racket2.shapeColor="orange"
	racket2.velocityX = 0;

	In3 = createSprite(19,560,10,30);
	In3.shapeColor="white"
	In4 = createSprite(782,560,10,30);
    In4.shapeColor="white"

   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  racket2.collide(In4);
  racket2.collide(In3);

  racket2.bounceOff(In4);
  racket2.bounceOff(In3);


  if(keyCode === LEFT_ARROW){
	  racket2.velocityX = -5;
  }

  if(keyCode === RIGHT_ARROW){
	racket2.velocityX = 5;
}
  
  drawSprites();
 
}



