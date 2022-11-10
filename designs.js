// ------------------ Select color input ------------------

const colorButton = document.getElementById('colorPicker');

let color = '#000000';

colorButton.addEventListener('input', (event) => {
    color = event.target.value;
}, true);

// ------------------ Select size input ------------------

const sizePicker = document.getElementById('sizePicker');
const width = document.getElementById('inputWidth');
const height = document.getElementById('inputHeight');
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user
// calls clearGrid() to clear #pixelCanvas table
// then call makeGrid() to make #pixelCanvas table

sizePicker.addEventListener('submit', event => {
    event.preventDefault();
    clearGrid();
    makeGrid();
});

// Create rows and cells based on size input

function makeGrid() {
    for (let i = 0; i < height.value; ++i) {
        const row = document.createElement('tr');
        row.className = 'row';

        const currentRow = canvas.appendChild(row);

        for (let j = 0; j < width.value; ++j) {
            const column = document.createElement('td');
            currentRow.appendChild(column);
        }
    }
}

// clears #pixelCanvas table

function clearGrid() {
    rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.remove();
    });
}

// ------------------ Change cell color ------------------

// When a #pixelCanvas table cell is clicked, toggle its color

canvas.addEventListener('click', changeColor);

function changeColor(event) {
    const cell = event.target;

    if (cell.classList.contains('marked')) {
        cell.style.backgroundColor = '#ffffff';

    } else {
        cell.style.backgroundColor = color;
    }
    cell.classList.toggle('marked');
}