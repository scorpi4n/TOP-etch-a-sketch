// html elements
const gridContainer = document.querySelector('.container')

gridContainer.style.display = 'grid'
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)'

for (let i = 0; i < 16**2; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    gridContainer.appendChild(cell)
}
