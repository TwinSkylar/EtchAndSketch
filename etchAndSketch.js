/**
 * Name:  createGrid
 * Purpose:  Creates a 16 rows with 16 elements 
 */

function createGrid() {
    const body = document.body;
    let grid = document.createElement("div");
    grid.classList.add("grid-container");
    body.appendChild(grid);
    for (i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.classList.add("box");
            row.appendChild(square);
        }
    }
}


createGrid();

