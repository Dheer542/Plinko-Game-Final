const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function setup() {
  createCanvas(480,800);
 platform1 = new Ground(240,790,480,20);
}

function draw() {
  background("black");  
  platform1.display();
  drawSprites();
}