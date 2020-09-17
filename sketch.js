var wall,thicknes ;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52 );
thickness=random(22,83); 

car=createSprite(50,200,50,50)
wall=createSprite(1200, 200,thicknes,height/2);

car.velocityX= speed;
wall.shapeColor="green";
}
function draw() {
  background(0);
  if(hasCollided(bullet,wall))  
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thicknes *thicknes *thicknes);
      {
        if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }
     
     
     if(damage<10)
     {
      wall.shapeColor=color(0,255,0);
     }
      drawSprites();
  }
}
}

function hasCollided(bullet,wall)
{
  bulletRightEdge+bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
