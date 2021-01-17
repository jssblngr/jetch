let adjustbtn = document.getElementById("countbutton")
let clearbtn = document.getElementById("clearbutton")
let blackbtn = document.getElementById("blackbtn")
let greybtn = document.getElementById("greybtn")
let rainbowbtn = document.getElementById("rainbowbtn")

adjustbtn.addEventListener("click", adjustGrid)
clearbtn.addEventListener("click", clearGrid)
blackbtn.addEventListener("click", blackBtn)
greybtn.addEventListener("click", greyBtn)
rainbowbtn.addEventListener("click", rainbowBtn)

let globalColor = ""

function defaultGrid() {
    document.getElementById("countsize").value = 50;
    createGrid(50);
}

function createGrid(rows) {
    var etchContainer = document.getElementById("etchcontainer");
    let x = rows * rows;
    document.documentElement.style.setProperty("--columns-row", rows);
    for (let i = 0; i < x; i++) {
        var etchCell = document.createElement("div");
        etchCell.classList.add("etchcell")
        etchContainer.appendChild(etchCell);
        etchCell.addEventListener("mouseenter", function setColor() {
                this.style.backgroundColor = `${globalColor}`;
        })
    }
}

function adjustGrid() {
    let rows = document.getElementById("countsize").value;
    rows = document.getElementById("countsize").value;
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

function blackBtn() {
    globalColor = "black";
    console.log(`blackBtn globalColor is now set to: ${globalColor}`)
}

function greyBtn() {
    let rows = document.getElementById("countsize").value;
    let etchCell = document.getElementsByClassName("etchcell");
    globalColor = "black"
    console.log(`greyBtn globalColor is now set to: ${globalColor}`)
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].addEventListener('mouseover', function greyFunc() {
            if (!etchCell[i].style.opacity){
                etchCell[i].style.opacity = "0.1";
            }
            let cellOpacity = parseFloat(etchCell[i].style.opacity);
            etchCell[i].style.opacity = cellOpacity + 0.1;
            console.log(`etchCell[i].style.opacity is ${etchCell[i].style.opacity}`)
            console.log(`cellOpacity is ${cellOpacity}`)
        })
    }
}

function rainbowBtn() {
    let rows = document.getElementById("countsize").value;
    let etchCell = document.getElementsByClassName("etchcell");
    globalColor = "rainbow"
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].addEventListener('mouseover', function rainbowFunc() {
            etchCell[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    }
}

defaultGrid();