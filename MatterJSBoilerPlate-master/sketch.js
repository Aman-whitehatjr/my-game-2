var bg, bgImg;
var sun,sunImg;
var mercury,mercuryImg;
var venus,venusImg;
var earth,earthImg;
var mars,marsImg;
var jupiter,jupiterImg;
var saturn,saturnImg;
var uranus,uranusImg;
var neptune,neptuneImg;
var rocket,rocketImg;
var astroid,astroidImg,astroidGroup;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var life = 3;

function preload()
{
	bgImg = loadImage("space.jpg")
	sunImg = loadImage("sun.png")
	mercuryImg = loadImage("mercury.gif")
	venusImg = loadImage("venus2.gif")
	earthImg = loadImage("earth.gif")
	marsImg = loadImage("mars.gif")
	rocketImg = loadImage("rocket.png")
	astroidImg = loadImage("astroid.png")
	jupiterImg = loadImage("jupiter.gif")
	heart1Img = loadImage("heart_1.png")
	heart2Img = loadImage("heart_2.png")
	heart3Img = loadImage("heart_3.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
	bg.addImage(bgImg)
	bg.scale = 5.5

sun = createSprite(150,300)
	sun.addImage(sunImg)
	sun.scale = 0.6

mercury = createSprite(644,335)
	mercury.addImage(mercuryImg)
	mercury.scale = 0.4

venus = createSprite(450,234)
	venus.addImage(venusImg)
	venus.scale = 0.4

earth = createSprite(402,399)
	earth.addImage(earthImg)
	earth.scale = 0.5
	
mars = createSprite(684,774)
	mars.addImage(marsImg)
	mars.scale = 0.45

jupiter = createSprite(650,590)
	jupiter.addImage(jupiterImg)
	jupiter.scale = 0.5


rocket = createSprite(5,30)
	rocket.addImage(rocketImg)
	rocket.scale = 0.1

heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4

	astroidGroup = new Group();	
}


function draw() {
   background(0);

if(life===3){
	heart3.visible = true
	heart1.visible = false
	heart2.visible = false
		  }

 if(life===2){
	heart2.visible = true
	heart1.visible = false
	heart3.visible = false
		  }

if(life===1){
	heart1.visible = true
	heart2.visible = false
	heart3.visible = false
		  }

if(life===0){
	heart1.visible = false
	heart2.visible = false
	heart3.visible = false
	
			}		     
  
if (keyDown("UP_ARROW")){
rocket.y = rocket.y-25
}

if (keyDown("DOWN_ARROW")){
rocket.y = rocket.y+15
}

if (keyDown("LEFT_ARROW")){
	rocket.x = rocket.x-16
	}

if (keyDown("RIGHT_ARROW")){
	rocket.x = rocket.x+16
	}


	if(astroidGroup.isTouching(rocket)){
 

		for(var i=0;i<astroidGroup.length;i++){     
			 
		 if(astroidGroup[i].isTouching(rocket)){
			  astroidGroup[i].destroy()
			  life = life-1
			  } 
		}}

		  

	spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
	if(frameCount%50===0){
  
	  //giving random x and y positions for zombie to appear
	  astroid = createSprite(random(900,1600),random(100,400),40,40)
  
	  astroid.addImage(astroidImg)
	  astroid.scale = 0.15
	  astroid.velocityX = -3
	  
	  astroid.lifetime = 400
	 
	  astroidGroup.add(astroid)  
	 
	}
  
  }

