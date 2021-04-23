var IronMan; ironImg;
var bg, backgroundImg;
var stoneGroup, stoneImage, stone;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg= loadImage("images/iron.png");
  stoneImage=loadImage("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=-0.9;
  IronMan=createSprite(200,505,20,50);
  IronMan.addImage(ironImg)
  IronMan.scale=0.3;
  IronMan.debug=true;
  IronMan.setCollider("rectangle",100,0,200,400)
  stoneGroup = new Group();

 
}

function draw() {
  if(keyDown("w")){
    IronMan.velocityY=-10;
  }
  if(keyDown("a")){
    IronMan.x=IronMan.x-5;
  }if(keyDown("d")){
    IronMan.x=IronMan.x+5;
  }
  IronMan.velocityY=IronMan.velocityY+0.5;

  generateStones();
  for(var i =0 ; i <(stoneGroup).length; i++){
    var temp = (stoneGroup).get(i);
    if(temp.isTouching(IronMan)){
      IronMan.collide(temp);
    }
  }

  
 
    
    drawSprites();
    function generateStones(){
      if(frameCount%40===0){
        var stone = createSprite(400,100);
        stone.y=random(50,450,200,30);
        stone.x=random(60,800,15,30);
        stone.addImage(stoneImage);
        stone.scale=0.9;
        stone.velocityY=5;
        stone.lifetime=650;
        stoneGroup.add(stone);
      }
    }
   
    }
  

   


