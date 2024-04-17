//New board button
const createBoard = document.querySelector("#createBoard");
createBoard.addEventListener("click", boardPrompt);
function boardPrompt() {
    let size = prompt("How many squares wide and tall do you want the board? (Maximum 100)");
    if (size > 100) {
        size = 100;
    }
    generateBoard(size);
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
    //Assign pixels as all squares after generation
    let pixels = document.querySelectorAll(".square");
    pixelAssignment(pixels);
}
function clearBoard() {
    const rows = document.querySelectorAll(".rows");
    rows.forEach(row => {
        row.remove();
    });
}

//Adds color change on hover for all pixels
function pixelAssignment(pixels) {
    pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", sketch);
    });
}

function sketch(event) {
    const targetElement = event.target;
    targetElement.style.backgroundColor = "black";
}