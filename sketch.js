
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var score=0;
var backgroundImg;
function preload()
{
	BackgroundImage();
}

function setup() {
   createCanvas(1300, 400);


	 engine = Engine.create();
   world = engine.world;
  
	 ground=new Ground(650,300,250,10);
   box1=new Box(650,290);
   box5=new Box(640,290);
   box8=new Box(660,290);
   box11=new Box(630,290);
   box13=new Box(670,290);
   box15=new Box(620,290);
	
	 box4=new Box(650,260);
	 
   box3=new Box(650,270);
	 box7=new Box(640,270);
   box10=new Box(660,270);

   box2=new Box(650,280);
   box6=new Box(640,280);
	 box9=new Box(660,280);
	 box12=new Box(630,280);
	 box14=new Box(670,280);
	 box16=new Box(680,280);
		
	 
   ground2=new Ground(1000,200,250,10);  
   box17=new Box(1000,190);
   box18=new Box(990,190);
   box19=new Box(1010,190);
   box20=new Box(980,190);


   box21=new Box(1000,180);
	 box22=new Box(990,180);
	 box23=new Box(1010,180);
   box24=new Box(1020,180);
   
   box25=new Box(1000,170);
             
	 polygon=new Polygon(50,200,20);

	 
	 
     rope1=new Launcher(polygon.body,{x:300,y:200})


 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);

  ground.display();
  ground2.display();
  noStroke()
  textSize(35);
  fill("white");
  text("Score "+score,50,70);

  stroke("black")
  fill("saddelbrown");
  box1.display();
  box5.display();
  box8.display();
  box11.display();
  box13.display();
  box15.display();
  box16.display();
  box1.score();
  box5.score();
  box8.score();
  box11.score();
  box13.score();
  box15.score();
  box16.score();
  fill("grey")
  box4.display();
  box4.score();
  fill("pink");
  box3.display();
  box7.display();
  box10.display();
  box3.score();
  box7.score();
  box10.score();
  fill("red");
  box2.display();
  box6.display();
  box9.display();
  box12.display();
  box14.display();
  box2.score();
  box6.score();
  box9.score();
  box12.score();
  box14.score();



  polygon.display();
  rope1.display();
  



  fill("skyblue");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box24.display();
  box17.score();
  box18.score();
  box19.score();
  box24.score();
  

  fill("Aqua")
  box21.display();
  box22.display();
  box23.display();
  box21.score();
  box22.score();
  box23.score();
 

  fill("pink"); 
  box25.display();
  box25.score();
    
  
 
  textSize(22);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);



  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope1.attach(polygon.body);
		  Matter.Body.setPosition(polygon.body,{x:300,y:200});

	}
}



async function BackgroundImage(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Calcutta");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>06 && hour<18){
      bg="images/day.png";
      
  } 
  else
  {
      bg="images/dark.png";
  }  
  backgroundImg=loadImage(bg);
 }


