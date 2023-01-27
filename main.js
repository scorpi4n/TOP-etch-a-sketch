const sketchboard = document.querySelector(".sketchboard");
const colorPicker = document.getElementById("colorPicker");
const sizeInput = document.getElementById("sizeInput");
const eraserBtn = document.getElementById("eraserBtn");
const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");

let mousedown = false;
sketchboard.onmousedown = () => (mousedown = true);
sketchboard.onmouseup = () => (mousedown = false);
drawSketchboard();

colorPicker.value = "#000";
let background = colorPicker.value;
colorPicker.addEventListener("change", () => {
	background = colorPicker.value;
});

function drawSketchboard(size = 16) {
	if (size < 2 || size > 100) {
		alert("Please submit a number 2-100");
		drawSketchboard();
		return;
	}
	sketchboard.style.display = "grid";
	sketchboard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	sketchboard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size ** 2; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.style.backgroundColor = "white";
		sketchboard.appendChild(cell);
		cell.addEventListener("mouseover", () => {
			if (mousedown) cell.style.backgroundColor = background;
		});
		cell.addEventListener("click", () => {
			cell.style.backgroundColor = background;
		});
	}
}

function reset() {
	sizeInput.value = 16;
	colorPicker.value = "#000";
	sketchboard.innerHTML = "";
	drawSketchboard(16);
}

eraserBtn.addEventListener("click", () => {
	background = "#FFF";
});
resetBtn.addEventListener("click", reset);
submitBtn.addEventListener("click", () => {
	sketchboard.innerHTML = "";
	drawSketchboard(sizeInput.value);
});
