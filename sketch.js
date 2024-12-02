var sandy=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,230);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,123,127) // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,sandy,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,random(height),sandy,130); // center of canvas, 20px dia
 
  fill(200,random(130,255),164,mouseY);
  ellipse(mouseX,mouseY,50,50);
  fill(255,50,50);
  stroke(255,255,255);
  strokeWeight(5);
  textFont("Helvetica");
  textSize(50);
  text('Hello',200,250);

}

function mousePressed() {

if(sandy>=500){
  sandy=0;
}else{
  sandy=sandy+5;
}


}