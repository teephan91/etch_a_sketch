// add eventlistener to the main container
const container = document.querySelector('#container');

// default grid size
createGrid(16);

// create custom grid
function createGrid(size) {
for (let z = 0; z < size; z++) {
    const newRow = document.createElement('div');
    container.appendChild(newRow).className = 'row';
}

const newRows = document.getElementsByClassName('row');

for (let i = 0; i < newRows.length; i++) {
    for (let j = 0; j < size; j++) {
        const column = document.createElement('div');
        newRows[i].appendChild(column).className = 'column';
    }
}

// maintain the max dimensions of grid regardless of size
const chosenDimensions = 600;
const columns = document.getElementsByClassName('column');

for (let square of columns) {
    square.style.width = chosenDimensions / size + "px";
    square.style.height = chosenDimensions / size + "px";
    // color the square when first click on the grid
    square.addEventListener('mousedown', colorSquare);
}

// start sketching function
function startSketch() {
    for (let square of columns) {
        square.addEventListener('mouseover', colorSquare);
    };

}

// stop sketching function
function stopSketch() {
    for (let square of columns) {
        square.removeEventListener('mouseover', colorSquare);
    };
}

// events listeners for the parent container instead of each square
container.addEventListener('mousedown', startSketch);
container.addEventListener('mouseup', stopSketch);
}

// color the square
function colorSquare() {
    this.classList.add('color-square');
}

// onclick button to ask about the grid size
const btn = document.querySelector('#btn');

btn.addEventListener('click', askGridSize);

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