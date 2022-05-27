// html elements
const gridContainer = document.querySelector('.container')

gridContainer.style.display = 'grid'
    // set how many columns in the grid

for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerText = i

    gridContainer.appendChild(cell)
}
