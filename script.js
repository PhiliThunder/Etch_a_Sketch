const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++) {
    const rows = document.createElement("div");
    rows.setAttribute("class", "rows")
    container.appendChild(rows);
    for (let i = 1; i <= 16; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        rows.appendChild(square);
    }
}

