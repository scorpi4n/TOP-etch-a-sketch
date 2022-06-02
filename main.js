// html elements
const sketchboard = document.querySelector('.sketchboard')

function drawSketchboard(size = 16) {
    sketchboard.style.display = 'grid'
    sketchboard.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    for (let i = 0; i < size**2; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerText = i
        sketchboard.appendChild(cell)
    }
}

drawSketchboard()