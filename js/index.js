const sudokuGrid = document.querySelector('.sudoku-grid');

function createSudokuGrid() {
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        sudokuGrid.appendChild(cell);
    }
}

createSudokuGrid();