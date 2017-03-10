var grid;

var s;
var m;
var g;
var c;
//var chart = { }; 

function preload(){
  world = loadImage("icon/world.png"); 
  
  person = loadImage("icon/person.png");
  rain = loadImage("icon/rain.png");
  snow = loadImage("icon/snowflake.png");

  storm = loadImage("icon/storm2.png");
  
  seattle = loadImage("icon/seattle.jpeg");
  medellin = loadImage("icon/medellin.png");
  guangzhou = loadImage("icon/guangzhou.png");
  cairo = loadImage("icon/cairo.png");
}

function setup() {
  createCanvas(414, 736);
  
grid = new Grid({
    "margin": 36,
    "columns": 4,
    "gutter": 12,
    "rows": 10
  });

  //w = requestWeather('data/mit-tuesday.json');
  //w = requestWeather('data/mit-wednesday.json');
  //w = requestWeather('data/cambridge.json');
  //w = requestWeather('data/alcatraz.json');
  //w= requestWeather('data/today-valleystream.json');
 s= requestWeather('data/seattletuesday.json');
 g= requestWeather('data/guangzhouthurs.json');
 c= requestWeather('data/cairothurs.json');
 m= requestWeather('data/medellinwed.json');
 //w = requestWeather(30.0594698,31.1882521, '9ef020075a224eb4c7e38fef624b49ec');
  
// leftEdge = width/2-75;
 //rightEdge = width-120;
 leftEdge = 175;
 rightEdge = width/2+75;
 topEdge = 520;
 bottomEdge = 660;

sx=97;
sy=103;
mx=136;
my=142;
gx=292;
gy=113;
cx=220;
cy=118;
}


function draw() {
  background(255, 255, 255, 30);
  imageMode(CENTER);
  

  
//  ellipse(97, 103, 3, 3); //seattle
  //ellipse(121, 97, 3, 3);
  //ellipse(136, 142, 3, 3); //medellin
  //ellipse(292, 113, 3, 3); //gaungzhou
  //ellipse(220, 118, 3, 3); //cairo

 
  fill('black');
  noStroke();
  textAlign(CENTER);
  textSize(14);
  
  if (s.ready) {
    drawWeather();
    noLoop;
    } 
    else {
    drawLabel("Loading...");
  }
  
  if (c.ready) {
    drawWeather();
    noLoop;
  } else {
    drawLabel("Loading...");
  }
  
 //
}


function mousePressed() {
  // whenever the mouse is clicked, print the location to the console
  print(mouseX + ", " + mouseY);
}


function keyPressed() {
 // print('key pressed ' + key);
//  print(grid);
  // when a key is pressed, let the grid know
  grid.keyPressed();
}


function drawLabel(what) {
  text(what, width/2, height - 36);
}

function drawWeather(){
     //map and locations pinpoints
   stroke(0);
   strokeWeight(.5);
   //noFill();
   line(136, 20, width/2, 10);
   line(width/2, 10, 268, 20);
   fill(168, 119, 21, 90);
   ellipseMode(CENTER);
   ellipse(width/2, 12, 2, 2);
   rectMode(CORNER);
   fill(2);
   stroke(0);
   rect(30,20, width-60, 190, 30)
  image(world, width/2, 120, 1200/4, 599/4);
  ellipseMode(RADIUS);
  fill(66, 134, 244);
  stroke(66, 134, 244, 50);
  strokeWeight(2);
  ellipse(sx, sy, 3, 3); //seattle
  ellipse(mx, my, 3, 3); //medellin
  ellipse(gx, gy, 3, 3); //guangzhou
  ellipse(cx, cy, 3, 3); //cairo
}

function Seattle(){
 
  image(seattle, width/2, bottomEdge); 
  //all for data set s, which is from Seattle
   var storms = s.getNearestStormDistance();
   var precipTypes = s.getPrecipType(); 
   var precipIns = s.getPrecipIntensity();
  
 push();
 translate(width/2 + storms, height/2+70);
 image(storm, 0, 0, 332*2/3, 194*2/3);
 pop();
   
var intens = map(precipIns, 0, .01, 0, 10);
  for (var i = 0; i < intens; i++) {
    var xs = map(i, 0, intens- 1, width/4, 3*width/4);

      //for (var t = 0; t < intens -1; t= t + second()) {
               if (precipTypes = rain){
                  noStroke();
                  //fill(93, 188, 210, 80);
                   //ellipse (x, topEdge + s, 5, 8);
                   image(rain, xs, topEdge + second(), 69/6, 116/6);        
                  }
              else if (precipTypes = snow) {
               //fill('white');
               //ellipse (x, topEdge + s, 8, 8);
                 image(snow, xs, topEdge + second(), 132/4, 123/4);
              }}
          
              
              clearInterval(Medellin);
              clearInterval(Guangzhou);
              clearInterval(Cairo);
              setInterval(Seattle, 100);

}




//Medellin
function Medellin(){
 
    image(medellin, width/2, bottomEdge, 400, 100); 
  //all for data set s, which is from Seattle
   var stormm = m.getNearestStormDistance();
   var precipTypem = m.getPrecipType(); 
   var precipInm = m.getPrecipIntensity();
  
push();
 translate(width/2 + stormm, height/2+70);
//muted bc theres something funky going on here
// image(storm, 0, 0, 332*2/3, 194*2/3);
 pop();
 
   
var intenm = map(precipInm, 0, .01, 0, 10);
  for (var i = 0; i < intenm; i++) {
    var xm = map(i, 0, intenm- 1, width/4, 3*width/4);

      //for (var t = 0; t < intens -1; t= t + second()) {
               if (precipTypem = rain){
                  noStroke();
                  //fill(93, 188, 210, 80);
                   //ellipse (x, topEdge + s, 5, 8);
                   image(rain, xm, topEdge + second(), 69/6, 116/6);        
                  }
              else if (precipTypem = snow) {
               //fill('white');
               //ellipse (x, topEdge + s, 8, 8);
                 image(snow, xm, topEdge + second(), 132/4, 123/4);
              }}
            
              clearInterval(Seattle);
              clearInterval(Guangzhou);
              clearInterval(Cairo);
                setInterval(Medellin, 200);
             
}

//Guangzhou
function Guangzhou(){
 
  image(guangzhou, width/2, bottomEdge-20, 350, 140); 
  //all for data set s, which is from Seattle
   var stormg = g.getNearestStormDistance();
   var precipTypeg = g.getPrecipType(); 
   var precipIng = g.getPrecipIntensity();
  

push();
 translate(width/2 + stormg, height/2+70);
 //muted bc theres something funky going on here
 //image(storm, 0, 0, 332*2/3, 194*2/3);
 pop();
 

   
var inteng = map(precipIng, 0, .01, 0, 10);
  for (var i = 0; i < inteng; i++) {
    var xg = map(i, 0, inteng- 1, width/4, 3*width/4);

      //for (var t = 0; t < intens -1; t= t + second()) {
               if (precipTypeg = rain){
                  noStroke();
                  //fill(93, 188, 210, 80);
                   //ellipse (x, topEdge + s, 5, 8);
                   image(rain, xg, topEdge + second(), 69/6, 116/6);        
                  }
              else if (precipTypeg = snow) {
               //fill('white');
               //ellipse (x, topEdge + s, 8, 8);
                 image(snow, xg, topEdge + second(), 132/4, 123/4);
              }}
              
              clearInterval(Medellin);
              clearInterval(Seattle);
              clearInterval(Cairo);
              setInterval(Guangzhou, 300);
       
           
}


function Cairo(){
 image(cairo, width/2, bottomEdge-20, 400, 140); 
   var stormc = c.getNearestStormDistance();
   var precipTypec = c.getPrecipType(); 
   var precipInc = c.getPrecipIntensity();
  
push();
 translate(width/2 + stormc, height/2+70);
//muted bc theres something funky going on here
//image(storm, 0, 0, 332*2/3, 194*2/3);
 pop();
 
   
var intenc = map(precipInc, 0, .01, 0, 10);
  for (var i = 0; i < intenc; i++) {
    var xc = map(i, 0, intenc- 1, width/4, 3*width/4);

      //for (var t = 0; t < intenc -1; t= t + second()) {
               if (precipTypec = rain){
                  noStroke();
                  //fill(93, 188, 210, 80);
                   //ellipse (x, topEdge + s, 5, 8);
                   image(rain, xc, topEdge + second(), 69/6, 116/6);        
                  }
              else if (precipTypec = snow) {
               //fill('white');
               //ellipse (x, topEdge + s, 8, 8);
                 image(snow, xc, topEdge + second(), 132/4, 123/4);
              }} 
           
             
              clearInterval(Medellin);
              clearInterval(Guangzhou);
              clearInterval(Seattle);
              setInterval(Cairo,400);
             
  
}

window.onload = function() {
  document.getElementById("Seattle").onmouseover = Seattle;
  
  document.getElementById("Medellin").onmouseover = Medellin;
  document.getElementById("Guangzhou").onmouseover = Guangzhou;
  document.getElementById("Cairo").onmouseover = Cairo;
}