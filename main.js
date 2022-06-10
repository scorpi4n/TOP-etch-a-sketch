// html elements
const sketchboard = document.querySelector('.sketchboard')
const colorPicker = document.getElementById('colorPicker')
const sizeInput = document.getElementById('sizeInput')
const eraserBtn = document.getElementById('eraserBtn')
const resetBtn = document.getElementById('resetBtn')
const submitBtn = document.getElementById('submitBtn')

let background = '#000'
colorPicker.addEventListener('change', () => {
    background = colorPicker.value
})

function drawSketchboard(size = 16) {
    if (size > 100 || size < 2) {
        alert('Please submit a number 2-100')
    } else {
        sketchboard.style.display = 'grid'
        sketchboard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        sketchboard.style.gridTemplateRows = `repeat(${size}, 1fr)`

        for (let i = 0; i < size**2; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.style.backgroundColor = 'white'
            sketchboard.appendChild(cell)
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = background
            })
        }        
    }
}
drawSketchboard()

function reset(size = 16) {

    sizeInput.value = 16
    colorPicker.value = "#000"
    drawSketchboard(16)
}

eraserBtn.addEventListener('click', () => {
    background = '#FFF'
})
resetBtn.addEventListener('click', reset)
submitBtn.addEventListener('click', () => {
    while (sketchboard.lastChild) {
        sketchboard.removeChild(sketchboard.lastChild)
    }
    drawSketchboard(sizeInput.value)
})