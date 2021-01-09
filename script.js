let btn = document.getElementById("countbutton")
btn.addEventListener("click", createGrid)

function createGrid() {
    var etchContainer = document.getElementById("etchcontainer");
    etchContainer.innerHTML = '';

    let rows = prompt("How many rows?");
    let x = rows * rows;
    document.documentElement.style.setProperty("--columns-row", rows);
    for (let i = 0; i < x; i++) {
        var etchCell = document.createElement("div");
        etchCell.classList.add("etchcell")
        etchContainer.appendChild(etchCell);
        etchCell.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "red";
        })
    }
}