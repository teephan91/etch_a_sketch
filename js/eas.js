const grid = document.querySelector('#grid');

// default grid size
createGrid(16);

function createGrid(size) {

// create custom grid based on size
for (let z = 0; z < size; z++) {
    const newRow = document.createElement('div');
    grid.appendChild(newRow).className = 'row';
}

const newRows = document.getElementsByClassName('row');

for (let i = 0; i < newRows.length; i++) {
    for (let j = 0; j < size; j++) {
        const column = document.createElement('div');
        newRows[i].appendChild(column).className = 'column';
    }
}

// maintain the chosen dimensions of grid regardless of size
const chosenDimensions = 600;
const columns = document.getElementsByClassName('column');

for (let square of columns) {
    square.style.width = chosenDimensions / size + "px";
    square.style.height = chosenDimensions / size + "px";
    // color the square when first click on the grid
    square.addEventListener('mousedown', colorSquare);
}

// sketching functions + event listeners for parent node '#grid'
function startSketch() {
    for (let square of columns) {
        square.addEventListener('mouseover', colorSquare);
    };

}

function stopSketch() {
    for (let square of columns) {
        square.removeEventListener('mouseover', colorSquare);
    };
}

grid.addEventListener('mousedown', startSketch);
grid.addEventListener('mouseup', stopSketch);
}

// onclick button to ask about the grid size
const btnSize = document.querySelector('#size');

btnSize.addEventListener('click', askGridSize);

function askGridSize(size) {
    size = prompt('How many squares per side?');
    if (size === null) {
        return;
    } else if ((size > 64) || (size < 5)) {
        alert('Please enter a size from 5 to 64.');
        askGridSize();
    } else if (!(+size)) {
        alert('Please enter a size from 5 to 64. And it has to be a NUMBER.');
        askGridSize();
    } else {
        removeGrid();
        createGrid(size);
    }
}

// remove old grid before adding new grid
function removeGrid() {
    const oldRows = document.querySelectorAll('.row');
    for (let oldRow of oldRows) {
        oldRow.remove();
    }
}

// clear sketching on the grid
const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click', clearGrid);

function clearGrid() {
    const allSquares = document.getElementsByClassName('column');

    for (let square of allSquares) { 
        square.style.backgroundColor = '#FFFFFF';
    }
}

// choose color to sketch
let defaultColor = "#1FB24B";
const btnColor = document.querySelector('#color');

btnColor.addEventListener('input', (color) => {
    defaultColor = color.target.value;
});

function colorSquare() {
    this.style.backgroundColor = defaultColor;
}
