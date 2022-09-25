const container = document.querySelector('#container');

container.addEventListener('mousedown', startSketch);
container.addEventListener('mouseup', stopSketch);

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

function colorSquare() {
    this.classList.add('color-square');
}

function startSketch() {
    columns.forEach((square) => {
        square.addEventListener('mouseover', colorSquare);
    });
}

function stopSketch() {
    columns.forEach((square) => {
        square.removeEventListener('mouseover', colorSquare);
    });
}