const gridContainer = document.getElementById('grid-container');
let gridDimensions = 16; //dimensions of grid will be based of this

function createGrid() {
  // empties div cotainer
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  //creates grid of divs in grid container based on inputtted grid dimensions
  gridContainer.style.gridTemplateColumns = 'repeat(' + gridDimensions + ', 1fr)';
  gridContainer.style.gridTemplateRows = 'repeat(' + gridDimensions + ', 1fr)';
  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', changeColorOnHover);
    gridContainer.appendChild(div);
  }
}

createGrid();

//changes color of div on mouse hover
function changeColorOnHover(event) {
  event.target.style.backgroundColor = 'black';
}

const sizeButton = document.getElementById('gridPrompt');

sizeButton.addEventListener('click', () => {
  //prompts user for grid dimensions when they press button
  const userInput = window.prompt('Enter desired grid size up to 100x100');
  //will set grid dimensions if user enters a number from 1 to 100
  if (userInput !== null && !isNaN(userInput) && userInput <=100 && userInput > 0) {
    const number = parseFloat(userInput); // Convert the input to a number (float)
    gridDimensions = number;
    createGrid();
    console.log('Grid will be', number, 'by', number);
  } else {
    console.log('Invalid input or user clicked "Cancel".');
  }
});