var canvas;
var fixedRect,movingRect;

function setup()
{
canvas=createCanvas(400,400);

fixedRect=createSprite(200,200,50,50);
fixedRect.shapeColor="blue";
fixedRect.debug=true;

movingRect=createSprite(300,200,50,50);
movingRect.shapeColor="blue";
movingRect.debug=true;
}

function draw()
{
background("gold");
movingRect.x=mouseX;
movingRect.y=mouseY;

if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2)
{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
else
{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}

drawSprites();
}