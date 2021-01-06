
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9,mango10l
var boy,boy_img;
var rock;
var slingshot;

function preload(){
  boy_img=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);
  engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
  tree=new Tree(700,350, 700,600)
  mango1=new Mango(690,180,50);
  mango2=new Mango(510,200,50);
  mango3=new Mango(570,170,50);
  mango4=new Mango(630,130,50);
  mango5=new Mango(700,240,50);
  mango6=new Mango(770,160,50);
  mango7=new Mango(830,350,50);
  mango8=new Mango(600,160,50);
  mango9=new Mango(580,260,50);
  mango10=new Mango(890,240,50);
  boy=createSprite(100,560,100,20);
  boy.addImage("boy_image",boy_img);
  boy.scale=0.1;
  rock=new Rock(40,500,40);
  slingshot=new Launch(rock.body,{x:55, y:500});
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background("#1db6d1");
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  rock.display();
  slingshot.display();


  drawSprites();
 
}
function mouseReleased(){
  slingshot.fly()
}
function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}




