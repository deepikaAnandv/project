const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree, mango;
var backgroundImg,platform;
var boy, stone;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810, 350);
    mango4 = new Mango(810,260,300, PI/2);

    mango5 = new Mango(700,240,70,70);
    mango6 = new Mango(920,240,70,70);


 
    stone = new Stone(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();

    mango5.display();
    mango6.display();
    

    stone.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
stone.fly()
}

