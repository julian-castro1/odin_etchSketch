let clearBut, blackBut, whiteBut, redBut, greenBut, blueBut, gradientBut, gridSizeInput;
let brushColor = "black";
let prevBrush = null;

// buttons
document.addEventListener("click", function(){
    if(event.target.id == "clear"){ drawGrid(); }
    if(event.target.className != "col"){ return; }
    let but = event.target;
    prevBrush = document.getElementById(brushColor);
    prevBrush.style.border = "0";

    brushColor = but.id;
    document.getElementById(but.id).style.border = "4px solid #868585";
})
document.addEventListener("mouseover", function(){
    if(event.target.className != "gridSpot"){ return; }
    event.target.style.backgroundColor = getCol(brushColor);
})

// grid
document.addEventListener("DOMContentLoaded", function () {
    // create the grid
    drawGrid();
});
document.addEventListener('input', drawGrid);
function clearGrid(){
    let child = document.getElementById("grid");
    let parent = child.parentElement;
    parent.removeChild(child);

    let newChild = document.createElement("div");
    newChild.id = "grid";
    newChild.backgroundColor = "#c9c9c9";

    parent.appendChild(newChild)
}
function getCol(colIn){
    switch(colIn){
        case "green" : return "#00d231"
        case "gradient" : return "hsl("+ Math.random()*255 + ",100%,50%)"
        // hsl(any, >30, >50)
        default : return colIn;
    }
}
function drawGrid(){
    clearGrid();
    let container = document.getElementById("grid");
    let contStyle = window.getComputedStyle(container);
    let side = contStyle.getPropertyValue("min-height");
    let lines = document.getElementById("in").value;

    // range from 1 - 100 for the grid lines
    if(lines < 1){ lines = 1; }
    else if(lines > 100){ lines = 100; }

    // draw lines
    let interval = side / lines;

    // Set the size of the grid container
    container.style.gridTemplateRows = `repeat(auto-fit, minmax(${interval}px, 1fr))`;
    container.style.gridTemplateColumns = `repeat(auto-fit, minmax(${interval}px, 1fr))`;
    container.style.gridGap = "1px";

    // Create grid items and add them to the grid container
    for (let i = 1; i <= lines*lines; i++) {
      const item = document.createElement("div");
      item.className = "gridSpot";
      item.style.backgroundColor = "#FFFFFF";
      const row = Math.floor((i - 1) / lines) + 1;
      const col = ((i - 1) % lines) + 1;

      // Set grid row and column positions for the item
      item.style.gridRow = `${row}`;
      item.style.gridColumn = `${col}`;
      container.appendChild(item);
    }
}