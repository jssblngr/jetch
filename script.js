const adjustbtn = document.getElementById("countbutton")
const clearbtn = document.getElementById("clearbutton")
const blackbtn = document.getElementById("blackbtn")
const greybtn = document.getElementById("greybtn")
const rainbowbtn = document.getElementById("rainbowbtn")
const erasebtn = document.getElementById("erasebtn")
const rgbpicker = document.getElementById('rgbpicker');

adjustbtn.addEventListener("click", adjustGrid)
clearbtn.addEventListener("click", clearGrid)
blackbtn.addEventListener("click", blackBtn)
greybtn.addEventListener("click", greyBtn)
rainbowbtn.addEventListener("click", rainbowBtn)
erasebtn.addEventListener("click", eraseBtn)
rgbpicker.addEventListener('change', rgbPicker)

function defaultGrid() {
    document.getElementById("countsize").value = 20;
    createGrid(20);
}

function createGrid(rows) {
    var etchContainer = document.getElementById("etchcontainer");
    let x = rows * rows;
    document.documentElement.style.setProperty("--columns-row", rows);
    for (let i = 0; i < x; i++) {
        var etchCell = document.createElement("div");
        etchCell.classList.add("etchcell")
        etchContainer.appendChild(etchCell);
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
        newCell = etchCell[x].cloneNode(true);
        etchCell[x].parentNode.replaceChild(newCell, etchCell[x]);
    }
}

function blackBtn() {
    let rows = document.getElementById("countsize").value;
    clearGrid();
    let etchCell = document.getElementsByClassName("etchcell");
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].style.opacity = "1";
        etchCell[i].addEventListener('mouseover', function () {
            etchCell[i].style.backgroundColor = "black";
        })
    }
}

function eraseBtn() {
    let rows = document.getElementById("countsize").value;
    let etchCell = document.getElementsByClassName("etchcell");
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].addEventListener('mouseover', function () {
            etchCell[i].style.backgroundColor = "grey";
        })
    }
}

function greyBtn() {
    let rows = document.getElementById("countsize").value;
    clearGrid();
    let etchCell = document.getElementsByClassName("etchcell");
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].style.opacity = "0.1";
        if (!etchCell[i].style.opacity) {
        }
        else {
            etchCell[i].addEventListener('mouseover', function () {
                let cellOpacity = parseFloat(etchCell[i].style.opacity);
                etchCell[i].style.opacity = cellOpacity + 0.1;
                etchCell[i].style.backgroundColor = "black";
                
            })
        }
    }
}

function rainbowBtn() {
    let rows = document.getElementById("countsize").value;
    clearGrid();
    let etchCell = document.getElementsByClassName("etchcell");
    for (let i = 0; i < rows * rows; i++) {
        etchCell[i].style.opacity = "1";
        etchCell[i].addEventListener('mouseover', function () {
            etchCell[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        })
    }
}

function rgbPicker() {
  console.log(rgbpicker.value);
  let rows = document.getElementById("countsize").value;
  clearGrid();
  let etchCell = document.getElementsByClassName("etchcell");
  for (let i = 0; i < rows * rows; i++) {
      etchCell[i].style.opacity = "1";
      etchCell[i].addEventListener('mouseover', function () {
          etchCell[i].style.backgroundColor = rgbpicker.value;
      })
  }
}

defaultGrid();