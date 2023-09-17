function preload() {

}

function setup() {
  canvas= createCanvas(700, 600);  
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  
 
}

function draw(){

  image(video,210,250,300,300);

stroke("red");
fill("red");

circle(530, 200,40);
circle(540,570,40);
circle(190,570,40);
circle(190,200,40);
noFill();
stroke("green");

rect(210,190,300,370);



}

function take_snapshot(){
  save('myFilterImage.png');
}



