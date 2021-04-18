const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,600,1200,20);
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  ball1 = new Ball(200, 200, 80, 80);
  rope1 = new Rope(ball1.body, {x: 500, y: 50});

}

function draw() {
  background(180);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  rope1.display();
}
