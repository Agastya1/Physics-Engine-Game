const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backImg;
var engine, world;
var sun, earth,mars, earthOrbitCounter, marsOrbitCounter;
function preload(){
  backImg = loadImage("Images/galaxy.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  engine.world.gravity.y = 0;

  sun = new Sun(300,300,100)
  earth = new Earth(300,450,45)
  earthOrbitCounter = 0;
  mars = new Mars(20,580,40);
  marsOrbitCounter = 0;
  createCanvas(600,600);
  
}

function draw() {
  background(backImg);  
Engine.update(engine);

sun.display();
earth.display();
mars.display();

// make the orbits
if(earthOrbitCounter == 0){
  Matter.Body.setVelocity(earth.body, {x: 2.5, y:-2.5})
}
if(earthOrbitCounter == 70){
  Matter.Body.setVelocity(earth.body, {x: -2.5, y:-2.5})
}
if(earthOrbitCounter == 140){
  Matter.Body.setVelocity(earth.body, {x: -2.5, y:2.5})
}
if(earthOrbitCounter == 210){
  Matter.Body.setVelocity(earth.body, {x: 2.5, y:2.5})
}
if(earthOrbitCounter == 280){
  earthOrbitCounter =0
  Matter.Body.setVelocity(earth.body, {x: 2.5, y:-2.5})
}
if(earthOrbitCounter == 35){
  Matter.Body.setVelocity(earth.body, {x: 2.5, y:-2.5})
}
if(earthOrbitCounter == 105){
  Matter.Body.setVelocity(earth.body, {x: -2.5, y:-2.5})
}
if(earthOrbitCounter == 175){
  Matter.Body.setVelocity(earth.body, {x: -2.5, y:2.5})
}
if(earthOrbitCounter == 245){
  Matter.Body.setVelocity(earth.body, {x: 2.5, y:2.5})
}
if(marsOrbitCounter == 0){
  Matter.Body.setVelocity(mars.body, {x: 5, y:0})
}
if(marsOrbitCounter == 160){
  Matter.Body.setVelocity(mars.body, {x: 0, y:-5})
}
if(marsOrbitCounter == 320){
  Matter.Body.setVelocity(mars.body, {x: -5, y:0})
}
if(marsOrbitCounter == 480){
  Matter.Body.setVelocity(mars.body, {x: 0, y:5})
}
if(marsOrbitCounter == 640){
  marsOrbitCounter = 0
  Matter.Body.setVelocity(mars.body, {x: 0, y:5})
}
if(marsOrbitCounter == 80){
  Matter.Body.setVelocity(mars.body, {x: 5, y:0})
}
if(marsOrbitCounter == 240){
  Matter.Body.setVelocity(mars.body, {x: 0, y:-5})
}
if(marsOrbitCounter == 400){
  Matter.Body.setVelocity(mars.body, {x: -5, y:0})
}
if(marsOrbitCounter == 560){
  Matter.Body.setVelocity(mars.body, {x: 0, y:5})
}
if(marsOrbitCounter == 720){
  marsOrbitCounter = 0;
  Matter.Body.setVelocity(mars.body, {x: 5, y:0})
}
earthOrbitCounter++;
marsOrbitCounter++;
console.log(earthOrbitCounter);
console.log(marsOrbitCounter);
}

function createOrbit(planet, counter, strength){
  if(counter === 0){
    console.log(counter);
    Matter.Body.setVelocity(planet.body, {x:strength, y:strength*(-1)})
      counter++
    
  }
}