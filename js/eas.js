const container = document.querySelector('#container');

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
    square.addEventListener('mouseenter', () => {
        square.classList.add('enter');
    });
});