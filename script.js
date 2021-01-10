let btn = document.getElementById("countbutton")
let clearbtn = document.getElementById("clearbutton")
btn.addEventListener("click", adjustGrid)
clearbtn.addEventListener("click", clearGrid)

function defaultGrid() {
    createGrid(50);
    document.getElementById("countsize").value = 50;
}

function createGrid(rows) {
    var etchContainer = document.getElementById("etchcontainer");
    let x = rows * rows;
    document.documentElement.style.setProperty("--columns-row", rows);
    for (let i = 0; i < x; i++) {
        var etchCell = document.createElement("div");
        etchCell.classList.add("etchcell")
        etchContainer.appendChild(etchCell);
        etchCell.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "black";
        })
    }
}

function adjustGrid() {
    let rows = document.getElementById("countsize").value;
    clearGrid();
    createGrid(rows);
}

function clearGrid() {
    let etchCell = document.getElementsByClassName("etchcell");
    let etchCellLength = etchCell.length
    for (let x = 0; x < etchCellLength; x++) {
        etchCell[x].style.backgroundColor = "grey";
    }
}

defaultGrid();