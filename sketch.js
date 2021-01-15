
var a, b;

function setup() {
  createCanvas(600,600);
 a = createSprite(400, 200, 50, 50);
 a.shapeColor = "green";
 b = createSprite(400, 200, 100, 50);
 b.shapeColor = "green";

a.debug=true;
b.debug=true;
}

function draw() {
  background("black");  

  b.x = mouseX;
  b.y = mouseY;
  console.log(b.x - a.x);
  

  if(b.x-a.x <a.width/2+b.width/2&&
    a.x-b.x <a.width/2+b.width/2&&
    a.y-b.y<a.height/2+b.height/2&&
    b.y-a.y<a.height/2+b.height/2){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}