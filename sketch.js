var bgImg;
var cat,catI;
var mouse,mouseI;
var catf,mousef;
var catt,mouset;
function preload() {
    //load the images here
   bgImg=loadImage("images/garden.png");
   catI=loadAnimation("images/cat2.png","images/cat3.png");
   mouseI=loadAnimation("images/mouse2.png","images/mouse3.png");
   catf=loadImage("images/cat1.png");
   mousef=loadImage("images/mouse1.png");
   catt=loadImage("images/cat4.png");
   mouset=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(800,500);
   cat.addImage("cat",catf);
   cat.scale=0.3;

   mouse=createSprite(100,500);
   mouse.addAnimation("mousef",mousef);
   mouse.scale=0.3;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
      if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addImage("tom",catt);
        cat.changeImage("tom");
        mouse.addImage("detective",mouset);
        mouse.changeImage("detective");
        cat.velocityX=0;
      }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseteasing",mouseI);
    mouse.changeAnimation("mouseteasing");
    mouse.framedelay=25;
  }
  if(keyCode===LEFT_ARROW){
    cat.addAnimation("catrunning",catI);
    cat.changeAnimation("catrunning");
    cat.velocityX=-3;
    cat.framedelay=25;
}}
