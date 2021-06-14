var hr, min, sc;
var hrAng, minAng, scAng;
var i;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 0);

  hr = hour();
  min = minute();
  sc = second();
  angleMode(DEGREES);

  hrAng = map((hr % 12), 0, 12, 0, 360);
  minAng = map(min, 0, 60, 0, 360);
  scAng = map(sc, 0, 60, 0, 360);

  translate(200, 200);


  ellipse(0, 0, 350, 350);

  for(i = 1; i<13; i++)
  {
    stroke(255,255,255)
    strokeWeight(10)
    line(0,-175,0,-175)
    rotate(30)

  }

rotate(-90)
  //second
  push();
  rotate(scAng);
  stroke(255, 0, 0);
  strokeWeight(7);

  line(0, 0, 150, 0);
  pop();

  //minute
  push();
  rotate(minAng);
  stroke(0, 255, 0);
  strokeWeight(7);

  line(0, 0, 100, 0);
  pop();
  //hour
  push();
  rotate(hrAng);
  stroke(0, 0, 255);
  strokeWeight(7);

  line(0, 0, 50, 0);
  pop();



  textSize(20);
  rotate(90)
  strokeWeight(5)
  text(hr%12+":"+min+":"+sc,100,190)

  
  drawSprites();
}
