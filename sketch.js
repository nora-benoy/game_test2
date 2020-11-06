var player,player_img;
var carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9,carrot10,carrot11,carrot12,carrot13,carrot14,carrot15,carrot16,carrot17,carrot18,carrot19,carrot20,carrot_img;
var carrot21,carrot22,carrot23,carrot24,carrot25,carrot26,carrot27,carrot28,carrot29,carrot30;
var carrot31,carrot32,carrot33,carrot34,carrot35,carrot36,carrot37,carrot38,carrot39,carrot40;
var carrotgroup;
var maze1,maze2,maze3;
var up,down,right,left;
var uparrow,downarrow,rightarrow,leftarrow;
var B1;

function preload(){
player_img = loadAnimation("bunny1.png","bunny2.png","bunny3.png","bunny4.png","bunny5.png","bunny6.png","bunny7.png");
carrot_img = loadImage("carrot.png");
maze1 = loadImage("maze1.jpg");
maze2 = loadImage("maze2.jpg");
maze3 = loadImage("maze3.jpg");
up = loadImage("up_arrow.jpg");
down = loadImage("down_arrow.jpg");
right = loadImage("right_arrow.jpg");
left = loadImage("left_arrow.jpg");
}

function setup(){
createCanvas(displayWidth-200,displayHeight-200)
player=createSprite(displayHeight-700,displayHeight-250);
player.addAnimation("Bunny",player_img);

B1 = createSprite(displayWidth-1110,displayHeight-300,10,50);

uparrow = createSprite(700,500,10,10);
uparrow.addImage("Up",up);
uparrow.scale = 0.25;

rightarrow = createSprite(800,500,10,10);
rightarrow.addImage("Right",right);
rightarrow.scale = 0.25;

leftarrow = createSprite(900,500,10,10);
leftarrow.addImage("Left",left);
leftarrow.scale = 0.25;

downarrow = createSprite(1000,500,10,10);
downarrow.addImage("Down",down);
downarrow.scale = 0.25;


carrot1=createSprite(displayWidth-1185,displayHeight-285);
carrot1.addImage("Carrot1",carrot_img);

carrot2=createSprite(displayWidth-1185,displayHeight-345);
carrot2.addImage("Carrot2",carrot_img);

carrot3=createSprite(displayWidth-1185,displayHeight-455);
carrot3.addImage("Carrot3",carrot_img);

carrot4=createSprite(displayWidth-1185,displayHeight-600);
carrot4.addImage("Carrot4",carrot_img);

carrot5=createSprite(displayWidth-1185,displayHeight-550);
carrot5.addImage("Carrot5",carrot_img);

carrot6=createSprite(displayWidth-1085,displayHeight-285);
carrot6.addImage("Carrot6",carrot_img);

carrot7=createSprite(displayWidth-1025,displayHeight-345);
carrot7.addImage("Carrot7",carrot_img);

carrot8=createSprite(displayWidth-885,displayHeight-350);
carrot8.addImage("Carrot8",carrot_img);

carrot9=createSprite(displayWidth-885,displayHeight-410);
carrot9.addImage("Carrot9",carrot_img);

carrot10=createSprite(displayWidth-490,displayHeight-323);
carrot10.addImage("Carrot10",carrot_img);

carrot11=createSprite(displayWidth-586,displayHeight-285);
carrot11.addImage("Carrot11",carrot_img);

carrot12=createSprite(displayWidth-330,displayHeight-250);
carrot12.addImage("Carrot12",carrot_img);

carrot13=createSprite(displayWidth-430,displayHeight-250);
carrot13.addImage("Carrot13",carrot_img);

carrot14=createSprite(displayWidth-287,displayHeight-285);
carrot14.addImage("Carrot14",carrot_img);

carrot15=createSprite(displayWidth-775,displayHeight-255);
carrot15.addImage("Carrot15",carrot_img);

carrot16=createSprite(displayWidth-685,displayHeight-255);
carrot16.addImage("Carrot16",carrot_img);

carrot17=createSprite(displayWidth-850,displayHeight-255);
carrot17.addImage("Carrot17",carrot_img);

carrot18=createSprite(displayWidth-950,displayHeight-255);
carrot18.addImage("Carrot18",carrot_img);

carrot19=createSprite(displayWidth-920,displayHeight-300);
carrot19.addImage("Carrot19",carrot_img);

carrot20=createSprite(displayWidth-685,displayHeight-570);
carrot20.addImage("Carrot20",carrot_img);

carrot21=createSprite(displayWidth-785,displayHeight-355);
carrot21.addImage("Carrot21",carrot_img);

carrot22=createSprite(displayWidth-600,displayHeight-675);
carrot22.addImage("Carrot22",carrot_img);

carrot23=createSprite(displayWidth-450,displayHeight-580);
carrot23.addImage("Carrot23",carrot_img);

carrot24=createSprite(displayWidth-565,displayHeight-390);
carrot24.addImage("Carrot24",carrot_img);

carrot25=createSprite(displayWidth-985,displayHeight-635);
carrot25.addImage("Carrot25",carrot_img);

carrot26=createSprite(displayWidth-290,displayHeight-595);
carrot26.addImage("Carrot26",carrot_img);

carrot27=createSprite(displayWidth-275,displayHeight-680);
carrot27.addImage("Carrot27",carrot_img);

carrot28=createSprite(displayWidth-487,displayHeight-650);
carrot28.addImage("Carrot28",carrot_img);

carrot29=createSprite(displayWidth-485,displayHeight-500);
carrot29.addImage("Carrot29",carrot_img);

carrot30=createSprite(displayWidth-590,displayHeight-570);
carrot30.addImage("Carrot30",carrot_img);

carrot31=createSprite(displayWidth-1085,displayHeight-550);
carrot31.addImage("Carrot31",carrot_img);

carrot32=createSprite(displayWidth-785,displayHeight-550);
carrot32.addImage("Carrot32",carrot_img);

carrot33=createSprite(displayWidth-900,displayHeight-480);
carrot33.addImage("Carrot33",carrot_img);

carrot34=createSprite(displayWidth-790,displayHeight-645);
carrot34.addImage("Carrot34",carrot_img);

carrot35=createSprite(displayWidth-750,displayHeight-450);
carrot35.addImage("Carrot35",carrot_img);

carrot36=createSprite(displayWidth-1100,displayHeight-675);
carrot36.addImage("Carrot35",carrot_img);

carrot37=createSprite(displayWidth-900,displayHeight-675);
carrot37.addImage("Carrot35",carrot_img);

carrot38=createSprite(displayWidth-350,displayHeight-440);
carrot38.addImage("Carrot35",carrot_img);

carrot39=createSprite(displayWidth-450,displayHeight-385);
carrot39.addImage("Carrot35",carrot_img);

carrot40=createSprite(displayWidth-387,displayHeight-350);
carrot40.addImage("Carrot35",carrot_img);

carrotgroup = new Group(carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9,carrot10,carrot11,carrot12,carrot13,carrot14,carrot15,carrot16,carrot17,carrot18,carrot19,carrot20,carrot21,carrot22,carrot23,carrot24,carrot25,carrot26,carrot27,carrot28,carrot29,carrot30,carrot32,carrot33,carrot34,carrot35,carrot36,carrot37,carrot38,carrot39,carrot40);

    
carrot1.scale = 0.08;
carrot2.scale = 0.08;
carrot3.scale = 0.08;
carrot4.scale = 0.08;
carrot5.scale = 0.08;
carrot6.scale = 0.08;
carrot7.scale = 0.08;
carrot8.scale = 0.08;
carrot9.scale = 0.08;
carrot10.scale = 0.08;

carrot11.scale = 0.08;
carrot12.scale = 0.08;
carrot13.scale = 0.08;
carrot14.scale = 0.08;
carrot15.scale = 0.08;
carrot16.scale = 0.08;
carrot17.scale = 0.08;
carrot18.scale = 0.08;
carrot19.scale = 0.08;
carrot20.scale = 0.08;

carrot21.scale = 0.08;
carrot22.scale = 0.08;
carrot23.scale = 0.08;
carrot24.scale = 0.08;
carrot25.scale = 0.08;
carrot26.scale = 0.08;
carrot27.scale = 0.08;
carrot28.scale = 0.08;
carrot29.scale = 0.08;
carrot30.scale = 0.08;

carrot31.scale = 0.08;
carrot32.scale = 0.08;
carrot33.scale = 0.08;
carrot34.scale = 0.08;
carrot35.scale = 0.08;
carrot36.scale = 0.08;
carrot37.scale = 0.08;
carrot38.scale = 0.08;
carrot39.scale = 0.08;
carrot40.scale = 0.08;
player.scale = 0.25;


}

function draw(){
background(maze2)

edges=createEdgeSprites();

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);

player.bounceOff(B1);

if(player.isTouching(carrotgroup)){
carrotgroup.destroyEach();
}

carrot1.depth = player.depth;
carrot2.depth = player.depth;
carrot3.depth = player.depth;
carrot4.depth = player.depth;
carrot5.depth = player.depth;
carrot6.depth = player.depth;
carrot7.depth = player.depth;
carrot8.depth = player.depth;
carrot9.depth = player.depth;
carrot10.depth = player.depth;
carrot11.depth = player.depth;
carrot12.depth = player.depth;
carrot13.depth = player.depth;
carrot14.depth = player.depth;
carrot15.depth = player.depth;
carrot16.depth = player.depth;
carrot17.depth = player.depth;
carrot18.depth = player.depth;
carrot19.depth = player.depth;
carrot20.depth = player.depth;
carrot21.depth = player.depth;
carrot22.depth = player.depth;
carrot23.depth = player.depth;
carrot24.depth = player.depth;
carrot25.depth = player.depth;
carrot26.depth = player.depth;
carrot27.depth = player.depth;
carrot28.depth = player.depth;
carrot29.depth = player.depth;
carrot30.depth = player.depth;
carrot31.depth = player.depth;
carrot32.depth = player.depth;
carrot33.depth = player.depth;
carrot34.depth = player.depth;
carrot35.depth = player.depth;
carrot36.depth = player.depth;
carrot37.depth = player.depth;
carrot38.depth = player.depth;
carrot39.depth = player.depth;
carrot40.depth = player.depth;

carrot1.depth = player.depth+1
carrot2.depth = player.depth+1
carrot3.depth = player.depth+1
carrot4.depth = player.depth+1
carrot5.depth = player.depth+1
carrot6.depth = player.depth+1
carrot7.depth = player.depth+1
carrot8.depth = player.depth+1
carrot9.depth = player.depth+1
carrot10.depth = player.depth+1
carrot11.depth = player.depth+1
carrot12.depth = player.depth+1
carrot13.depth = player.depth+1
carrot14.depth = player.depth+1
carrot15.depth = player.depth+1
carrot16.depth = player.depth+1
carrot17.depth = player.depth+1
carrot18.depth = player.depth+1
carrot19.depth = player.depth+1
carrot20.depth = player.depth+1
carrot21.depth = player.depth+1
carrot22.depth = player.depth+1
carrot23.depth = player.depth+1
carrot24.depth = player.depth+1
carrot25.depth = player.depth+1
carrot26.depth = player.depth+1
carrot27.depth = player.depth+1
carrot28.depth = player.depth+1
carrot29.depth = player.depth+1
carrot30.depth = player.depth+1
carrot31.depth = player.depth+1
carrot32.depth = player.depth+1
carrot33.depth = player.depth+1
carrot34.depth = player.depth+1
carrot35.depth = player.depth+1
carrot36.depth = player.depth+1
carrot37.depth = player.depth+1
carrot38.depth = player.depth+1
carrot39.depth = player.depth+1
carrot40.depth = player.depth+1

console.log(carrot1.depth);
console.log(player.depth);

if(touches.length>0|| mousePressedOver(uparrow)){
touches=[];
player.velocityY = -5;
}

if(touches.length>0|| mousePressedOver(downarrow)){
touches=[];
player.velocityY = 5;
}

if(touches.length>0|| mousePressedOver(rightarrow)){
touches=[];
player.velocityX = 5;
}

if(touches.length>0|| mousePressedOver(leftarrow)){
touches=[];
player.velocityX = -5;
}

drawSprites();
}

