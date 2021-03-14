
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var score =0;

function preload(){

  explosionImg = loadImage("explosion.png");
  backgroundImg = loadImage("daytimebg.jpg");

}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(650, 590, 1300, 20)
  sidewall1 = new Ground(1299, 300, 5, 1300);
  sidewall2 = new Ground(1, 300, 5, 1300);
	Engine.run(engine);


  //creating explosion holder with slings
  explosion = Bodies.circle(50, 200, 20);
  World.add(world, explosion);

  slingShot = new Slingshot(this.explosion, {x:200, y:200});

  block1 = new Block(820, 550, 100, 100);
  block2 = new Block(1020, 550, 100, 100);
  block3 = new Block(1190, 550, 100, 100);

  money1 = new Money(910, 550, 80, 80);
  money2 = new Money(1090, 550, 80, 80);

  block4 = new Block(910, 420, 100, 100);
  block5 = new Block(1090, 420, 100, 100);

  money3 = new Money(1010, 420, 80, 80);

  block6 = new Block(1010, 320, 100, 100);


}

function draw() {

  background(backgroundImg); 

  //Add code for displaying text here
  fill("black");
  stroke(4)
  textSize(20);
  textFont("Georgia");
  text("DRAG THE EXPLOSION AND TRY TO BLOW UP THE BLOCKS TO GET THE MONEY!", 230, 100);
  textSize(15);
  text("PRESS THE SPACE KEY TO GET A SECOND CHANCE TO PLAY!", 230, 485);
  text("SCORE:" + score, width-100, 50);

  ground.display();
  block1.display();
  block2.display();
  block3.display();

  money1.display();
  money2.display();
  
  block4.display();
  block5.display();

  money3.display();

  block6.display();
  
  sidewall1.display();
  sidewall2.display();

  imageMode(CENTER)
  image(explosionImg, explosion.position.x, explosion.position.y, 40, 40);

  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.explosion, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingShot.attach(this.explosion);
  }
}
