var cat,catImg2;
var mouse,mouseAnmtn;

function preload() {
BG = loadImage("images/garden.png");

catImg = loadImage("images/tomOne.png");

catImg2 = 
loadAnimation("images/tomTwo.png","images/tomThree.png");

catImg3 = loadImage("images/tomFour.png");

mouseImg = loadImage("images/jerryOne.png");

mouseAnmtn = 
loadAnimation("images/jerryTwo.png","images/jerryThree.png");

mouseEnd = loadImage("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,700);
    cat.addImage(catImg);
    cat.scale = 0.1;
    mouse = createSprite(300,700);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

}

function draw() {
    background(BG);
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   mouse.x = 234;
   cat.addAnimation("catLastImage",catImg3);
   cat.changeAnimation("catLastImage");
   cat.velocityX = 0;
   mouse.addAnimation("mouseEnd",mouseEnd);
   mouse.changeAnimation("mouseEnd");
}
     drawSprites();
}


function keyPressed(){
     if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouseCalling",mouseAnmtn);
     mouse.changeAnimation("mouseCalling");
    }
}