//add variables to interact with
let submit = document.querySelector('input[type="submit"]');
let canvas = document.querySelector('#pixelCanvas');

//add makeGrid();
function makeGrid(){
	let rows = document.querySelector('#inputHeight').value;
	let columns = document.querySelector('#inputWidth').value;
	canvas.innerHTML = "";
	canvas.style.backgroundColor = "";

	for (let i = 0; i < rows; i++){
		let row = document.createElement('TR');
		canvas.appendChild(row);

		for (let j = 0; j < columns; j++){
			let col = document.createElement('TD');
			row.appendChild(col);
		}
	}
}

function addColor(event){
	let gridSquare = event.target;
	let myColor = document.querySelector('#colorPicker').value;
	if (event.target.nodeName == "TD"){
		gridSquare.style.backgroundColor = myColor;
	}
}

//add event listeners
submit.addEventListener('click', function(event){
	event.preventDefault();
	makeGrid();
});

canvas.addEventListener('mousedown', addColor);









