// add eventlistener to the main container
const container = document.querySelector('#container');

container.addEventListener('mousedown', startSketch);
container.addEventListener('mouseup', stopSketch);

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
}

const columns = document.querySelectorAll('.column');

columns.forEach((square) => {
    square.addEventListener('mousedown', colorSquare);
});

// color the square
function colorSquare() {
    this.classList.add('color-square');
}

// start sketching
function startSketch() {
    columns.forEach((square) => {
        square.addEventListener('mouseover', colorSquare);
    });
}

// stop sketching
function stopSketch() {
    columns.forEach((square) => {
        square.removeEventListener('mouseover', colorSquare);
    });
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