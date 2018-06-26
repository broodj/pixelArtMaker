//add variables to interact with
let submit = document.querySelector('input[type="submit"]');
let canvas = document.querySelector('#pixelCanvas');

let color = document.querySelector('#colorPicker').value;

//add makeGrid();
function makeGrid(){
	let rows = document.querySelector('#inputHeight').value;
	let columns = document.querySelector('inputWidth').value;
	canvas.innerHTML = "";

	for (let i = 0; i < rows; i++){
		let row = document.createElement('TR');
		canvas.appendChild(row);

		for (let j = 0; j < rows; j++){
			let col = document.createElement('TD');
			row.appendChild(col);
		}
	}
}


//add event listeners














