
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png")
    cat2=loadAnimation("images/cat2.png")
}   

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(870,600)
    cat.addAnimation("cat1",cat1)
    cat.scale=0.2
    mouse= createSprite(200,600)
    mouse.addAnimation("mouse1",mouse1)
    mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    mouse.velocityX=0
    mouse.addAnimation("mouse2",mouse2)
    mouse.changeAnimation("mouse2")
    cat.addAnimation("cat2",cat2)
    cat.changeAnimation("cat2")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode===LEFT_ARROW){
     mouse.velocityX=5
 }

}
