// add eventlistener to the main container
const container = document.querySelector('#container');

container.addEventListener('mousedown', startSketch);
container.addEventListener('mouseup', stopSketch);
 
// create 16x16 grid
for (let z = 0; z < 16; z++) {
    const row = document.createElement('div');
    container.appendChild(row).className = 'row';
}

const rows = document.getElementsByClassName('row');

for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        rows[i].appendChild(column).className = 'column';
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
}