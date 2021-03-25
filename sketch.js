const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundimg;


function preload() {
//preload the images here
backgroundimg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(width/2,height,width,20);
  superhero = new Hero(100, 200, 400, 250)
  rope = new Fly(superhero.body,{x:350, y:50})


 block1 = new Block(900, 100, 40, 40)
 block2 = new Block(900, 100, 40, 40)
 block3 = new Block(900, 100, 40, 40)
 block4 = new Block(900, 100, 40, 40)
 block5 = new Block(900, 100, 40, 40)
 block6 = new Block(900, 100, 40, 40)
 block7 = new Block(900, 100, 40, 40)
 block8 = new Block(900, 100, 40, 40)
 block9 = new Block(900, 100, 40, 40)
 block10 = new Block(900, 100, 40, 40)
 block11 = new Block(900, 100, 40, 40)
 block12 = new Block(900, 100, 40, 40)
 block13 = new Block(900, 100, 40, 40)
 block14 = new Block(850, 100, 40, 40)
 block15 = new Block(850, 100, 40, 40)
 block16 = new Block(850, 100, 40, 40)
 block17 = new Block(850, 100, 40, 40)
 block18 = new Block(850, 100, 40, 40)
 block19 = new Block(850, 100, 40, 40)
 block20 = new Block(850, 100, 40, 40)
 block21 = new Block(850, 100, 40, 40)
 block22 = new Block(800, 100, 40, 40)
 block23 = new Block(800, 100, 40, 40)
 block24 = new Block(800, 100, 40, 40)
 block25 = new Block(800, 100, 40, 40)
 block26 = new Block(800, 100, 40, 40)
 block27 = new Block(800, 100, 40, 40)
 block28 = new Block(800, 100, 40, 40)
 block29 = new Block(800, 100, 40, 40)
 block30 = new Block(800, 100, 40, 40)
 block31 = new Block(800, 100, 40, 40)
 block32 = new Block(800, 100, 40, 40)

 monster1 = new Monster(1090, 100, 200, 200)


}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
 
  ground.display();
  superhero.display();
  rope.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
 block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
   block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
   block29.display();
  block30.display();
  block31.display();
 block32.display();
 monster1.display();
}


function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  superhero.fly();
}


