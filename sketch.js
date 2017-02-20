function setup() {
   createCanvas(800,600)
   background(255)
   mic = new p5.AudioIn();
   mic.start();
   pac=loadImage("pac.png");
}

function draw() {

  var volume = mic.getLevel();
  var newMax = 10;
  volume = map(volume,0,1,0,newMax);
  var sizeone = map(volume,0,1,20,60);
  var sizetwo = map(volume,0,1,10,30);
  var sizeone1 = map(volume,0,1,10,150);
  var sizeone2 = map(volume,0,1,150,300);
  var sizep = map(volume,0,1,0,800);
   
  var x= 10;
  var y=10;
  for(x= 10; x<790 ; x+=20){
  for( y= 10; y<600; y+=20){
  fill("orange")
  noStroke();
  triangle(x,y,sizetwo,y,5+x,10+y);
  triangle(x,y,sizetwo,y,5+x,-10+y);
   }}
   for(var a= 5; a<790 ; a+=20){
   for( var b= 5; b<590; b+=20){
     fill(250,89,78);
     ellipse(a,b,sizeone);}}
    
     fill(255);
     ellipseMode(CENTER)
     ellipse(width/2-305,height/2+15,10,10);
     if(sizep>100){
        ellipseMode(CENTER)
       ellipse(width/2-205,height/2+15,12,12);
       if(sizep>150){
         ellipseMode(CENTER)
       ellipse(width/2-105,height/2+15,14,14);
       if(sizep>200){
         ellipseMode(CENTER)
       ellipse(width/2,height/2+15,16,16);
       if(sizep>250){
         ellipseMode(CENTER)
       ellipse(width/2+105,height/2+15,18,18);
      if(sizep>300){
        ellipseMode(CENTER)
       ellipse(width/2+205,height/2+15,18,18);
       if(sizep>400){
         ellipseMode(CENTER)
       ellipse(width/2+305,height/2+15,18,18);
       if(sizep>600){
         textAlign(CENTER);
         textSize(40);
         textFont("din");
         textStyle("bold");
         background(250,89,78);
         imageMode(CENTER);
         image(pac,width/2,height/2,150,150);
         text("YOU WIN!",width/2,height/2-150);
     }
     }
     }
     }
     }
     }
     }
     image(pac,sizep,height/2+7,40,40);
     
}