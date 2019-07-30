function add_header(targetedRow, text){
  var myHeader = document.createElement("TH");
  var headerText = document.createTextNode(text);
  myHeader.appendChild(headerText);
  document.getElementById(targetedRow).appendChild(myHeader);
  myHeader.style.border = "1px solid black";
}

function add_cell(targetedRow, text){
  var myCell = document.createElement("TD");
  var cellText = document.createTextNode(text);
  myCell.appendChild(cellText);
  document.getElementById(targetedRow).appendChild(myCell);
  myCell.style.border = "1px solid black";
}

var myTable = document.createElement("TABLE");
myTable.setAttribute("id", "myTable");
document.body.appendChild(myTable);
myTable.style.border = "1px solid black";

var row0 = document.createElement("TR");
row0.setAttribute("id", "row0");
document.getElementById("myTable").appendChild(row0);

var row1 = document.createElement("TR");
row1.setAttribute("id", "row1");
document.getElementById("myTable").appendChild(row1);

var row2 = document.createElement("TR");
row2.setAttribute("id", "row2");
document.getElementById("myTable").appendChild(row2);

var row3 = document.createElement("TR");
row3.setAttribute("id", "row3");
document.getElementById("myTable").appendChild(row3);

for (var i=1; i<=4; i++){
  add_header("row0","Header "+i);
}

for (var i=1; i<4; i++){
  for (var j=1; j<=4; j++){
    add_cell("row"+i, i+", "+j);
  }
}

var currentX = 1;
var currentY = 1;

function move_cell(x,y,newX,newY){
  if (newX >= 1 && newX<=3 && newY >= 1 && newY<=4){
    var current_row = document.getElementById("row"+x);
    var current_cell = current_row.getElementsByTagName("TD");
    current_cell[y-1].style.border = "1px solid black";
    current_row = document.getElementById("row"+newX);
    current_cell = current_row.getElementsByTagName("TD");
    current_cell[newY-1].style.border = "thick solid black";
  }
}

move_cell(currentX, currentY, currentX, currentY);

var upButton = document.createElement("BUTTON");
var upButtonText = document.createTextNode("UP");
upButton.appendChild(upButtonText);
document.body.appendChild(upButton);

var downButton = document.createElement("INPUT");
downButton.setAttribute("id", "downButton");
downButton.setAttribute("type", "BUTTON");
downButton.setAttribute("value", "DOWN");
document.body.appendChild(downButton);

var leftButton = document.createElement("INPUT");
leftButton.setAttribute("id", "leftButton");
leftButton.setAttribute("type", "BUTTON");
leftButton.setAttribute("value", "LEFT");
document.body.appendChild(leftButton);

var rightButton = document.createElement("INPUT");
rightButton.setAttribute("id", "rightButton");
rightButton.setAttribute("type", "BUTTON");
rightButton.setAttribute("value", "RIGHT");
document.body.appendChild(rightButton);

var markButton = document.createElement("INPUT");
markButton.setAttribute("id", "markButton");
markButton.setAttribute("type", "BUTTON");
markButton.setAttribute("value", "MARK CELL");
document.body.appendChild(markButton);

upButton.addEventListener("click", function(){
  move_cell(currentX, currentY, currentX-1, currentY);
  if(currentX>1) {currentX--};
});
downButton.addEventListener("click", function(){
  move_cell(currentX, currentY, currentX+1, currentY);
  if (currentX<3) {currentX++};
});
leftButton.addEventListener("click", function(){
  move_cell(currentX, currentY, currentX, currentY-1);
  if (currentY>1) {currentY--};
});
rightButton.addEventListener("click", function(){
  move_cell(currentX, currentY, currentX, currentY+1);
  if (currentY<4) {currentY++};
});
markButton.addEventListener("click", function(){
  var current_row = document.getElementById("row"+currentX);
  var current_cell = current_row.getElementsByTagName("TD");
  current_cell[currentY-1].style.backgroundColor = "yellow";
});
