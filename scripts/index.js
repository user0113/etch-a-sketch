const gridContainer = document.getElementById('grid-container');
let gridDimensions = 100;
/*let isMouseDown = false;*/

gridContainer.style.gridTemplateColumns = 'repeat(' + gridDimensions + ', 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(' + gridDimensions + ', 1fr)';

function createGrid() {
  for (let i = 0; i < gridDimensions * gridDimensions; i++) {
    const div = document.createElement('div');
    div.addEventListener('mouseover', changeColorOnHover);
    /*div.addEventListener('mousedown', () => {
      isMouseDown = true;
    });*/
    gridContainer.appendChild(div);
  }
}

createGrid();

/*document.addEventListener('mouseup', () => {
  isMouseDown = false;
});*/

function changeColorOnHover(event) {
  /*if (isMouseDown) {*/
    event.target.style.backgroundColor = 'black'; // Change the background color to red (you can set any color you want)
  /*}*/
}
