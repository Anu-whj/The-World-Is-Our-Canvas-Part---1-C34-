var database;
var drawing = [];
var currentPath = [];

function setup() {
  //creates the canvas.
  canvas = createCanvas(400, 400);
  //creates a new path of drawing.
  canvas.mousePressed(startPath);
}

function startPath(){
  //creates a currentPath array.
  currentPath = [];
  //pushes the points in the currentPath array to the drawing array.
  drawing.push(currentPath);
}

function draw() {
  //gives background colour.
  background(0);

  //creates a point variable when the mouse is pressed(starts the drawing).
  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    //pushes the points to the currentPath variable.
    currentPath.push(point);
  }
  
  //creates a white outline when drawing.
  stroke(255);
  strokeWeight(4);
  noFill();

  //creates a for loop and creates an index of the path.
  for(var i = 0; i < drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < path.length; j++){
      vertex(path[j].x, path[j].y);
    }
    endShape();
  }
}