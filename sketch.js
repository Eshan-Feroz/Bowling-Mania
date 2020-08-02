const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;
var score = 0;
var backgroundIMG;
var bg = "sprites/bg1.png";

function preload(){
    getBackgroundImg()
}


function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    stand1 = new Ground(600,350,280,20);
    stand2 = new Ground(600,220,220,20);
    stand3 = new Ground(600,80,220,20);
    stand = new Ground(width/2, 0, width, 10);

    box1 = new Box1(480,330,30,60);
    box2 = new Box1(530,330,30,60);
    box3 = new Box1(540,330,30,60);
    box4 = new Box1(590,330,30,60);
    box5 = new Box1(600,330,30,60);
    box6 = new Box1(650,330,30,60);
    box7 = new Box1(660,330,30,60);
                

    box22 = new Box1(510,200,30,60);
    box23 = new Box1(550,200,30,60);
    box24 = new Box1(560,200,30,60);
    box25 = new Box1(610,200,30,60);
    box26 = new Box1(620,200,30,60);
    box27 = new Box1(650,200,30,60);
    box28 = new Box1(530,70,30,60);
    box29 = new Box1(570,70,30,60);
    box30 = new Box1(580,70,30,60);
    box31 = new Box1(630,70,30,60);
    box32 = new Box1(640,70,30,60);
    box33 = new Box1(670,70,30,60);


    
    bird = new Bird(200,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:150});
}

function draw(){
    if(backgroundIMG)
    background(backgroundIMG);
    
    Engine.update(engine);
    noStroke();
        textSize(35)
        fill("red")
        text("Score: " + score, 350, 40)
        strokeWeight(10);
        textSize(50);
        fill("green");
        text("BOWLING", 20,50);
        textSize(20);
        fill("yellow");
        text("Launch the red bowling ball into the bowling pins...", 20, 100);
        fill("yellow");
        text("Press Space to relaunch the bowling ball.", 50, 350);
    strokeWeight(4);
    
    
    //stand1.display();
    //stand2.display(); 
    //stand3.display();
    stand.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display(); 
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score(); 
    
    box22.display();
    box23.display(); 
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    box22.score();
    box23.score(); 
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();


    bird.display();
   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.datetime);
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)

    if(hour>=06 && hour<=19){
        bg = "sprites/Bowling.jpg";
    }
    else{
        bg = "sprites/bowlnight.jpeg";
    }

    backgroundIMG = loadImage(bg);
    //console.log(backgroundImg);
}
