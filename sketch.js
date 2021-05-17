const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world;
var ground;

function setup(){
   createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution:0.8
    }

    ground= Bodies.rectangle(400,300,800,20,ground_options);
    ball=Bodies.circle(400,100,40,ball_options);
    World.add(world,ground);
    World.add(world,ball);
   


    
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,400);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40)
}
