let clearBut, blackBut, whiteBut, redBut, greenBut, blueBut, gradientBut, gridSizeInput;

document.addEventListener("DOMContentLoaded", function () {
    // create the grid
    drawGrid();
});

function clearGrid(){

}
function drawGrid(){
    let container = document.getElementById("grid");
    let contStyle = window.getComputedStyle(container);
    let side = contStyle.getPropertyValue("min-height");
    let lines = 20//document.getElementById("in").value;

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