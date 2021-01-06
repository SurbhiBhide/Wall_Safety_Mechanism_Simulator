var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1300, 400);
  bullet = createSprite(50, 200, 80, 20);
  bullet.shapeColor = ("gold");

  wall = createSprite(1150,200,thickness,height/2);
  wall.shapeColor = ("white");

  speed = random(47,268);
  weight = random(30,52);
  thickness = random(18,81);
}

function draw() {
  background("lightblue");  

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage < 10){
      wall.shapeColor = ("green");
      fill("white");
  textSize(25);
      text("Safe", 600,300);
    }

    if(damage > 10){
      wall.shapeColor = ("red");
      fill("white");
  textSize(25);
      text("Unsafe", 600,300);
    }
  }

  drawSprites();
  fill("white");
  textSize(25);
  text("Bullet", 80, 270);

  text("Wall", 1125, 340);
}

function hasCollided(bulletl, walll){

bulletRightEdge = bulletl.x + bulletl.width;
wallLeftEdge = walll.x;

if(bulletRightEdge > wallLeftEdge)
{
return true;
}else {
  return false;
}

}