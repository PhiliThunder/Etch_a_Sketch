const CONTAINER_WIDTH = 960; //px
//New board button
const createBoard = document.querySelector("#createBoard");
createBoard.addEventListener("click", boardPrompt);
function boardPrompt() {
    let size = prompt("How many squares wide and tall do you want the board? (Maximum 100)");
    if (size > 100) {
        size = 100;
        alert("The size was set to the maximum: 100");
    }
    generateBoard(size);
    squareSizer(size);
}
//Scales up squares to fill container
function squareSizer(size) {
    const squareStyle = document.querySelectorAll(".square");
    let squareSize = CONTAINER_WIDTH / size;
    const squareSizeString = squareSize + "px";
    squareStyle.forEach(pixel => {
        pixel.style.width = squareSizeString;
        pixel.style.height = squareSizeString;
    })
}
const squareContainer = document.querySelector("#squareContainer");
//Generates rows and squares within squareContainer in quantity from prompt
function generateBoard(size) {
    clearBoard();
    for (let i = 1; i <= size; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows")
        squareContainer.appendChild(rows);
        for (let i = 1; i <= size; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            rows.appendChild(square);
        }
    }
    //Assign pixels as all squares to be paintable after generation
    pixelAssignment();
}
function clearBoard() {
    const rows = document.querySelectorAll(".rows");
    rows.forEach(row => {
        row.remove();
    });
}
//Adds color change on hover for all pixels
function pixelAssignment() {
    const pixels = document.querySelectorAll(".square");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", sketch);
    });
}
function sketch(event) {
    const sketchSquare = event.target;
    sketchSquare.style.backgroundColor = "black";
}
//Darkening mode
const darkenButton = document.querySelector("#darkening");
darkenButton.addEventListener("click", darkeningStart);
function darkeningStart() {
    const pixels = document.querySelectorAll(".square");
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", darken);
        pixel.style.backgroundColor = "black";
        pixel.style.opacity = 0;
    })
}
function darken(event) {
    const darkenSquare = event.target;
    let currentOpacity = parseFloat(darkenSquare.style.opacity); //Has to be parsed to Float as .style.opacity returns a string
    currentOpacity += 0.1;
    darkenSquare.style.opacity = currentOpacity.toString(); //Back to being a string here
}