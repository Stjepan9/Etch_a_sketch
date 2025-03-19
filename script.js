//PSEUDOCODE

// CREATE A HEADER FOR ETCH_A_SKETCH
// Create button container
// Create buttons inside container(color, rainbow, eraser, gradient)
// Create Input-color above buttons
// Create a div container that will contain grid ( small cubes inside big container)


//PSEUDOCODE JAVASCRIPT

//Select all buttons and elements using QuerySelector
//Select grid container
//Select buttons (Color, Rainbow, Clear, Eraser)
//Select color picker
//Select grid size slider and display value

//Create a function to generate the grid
//Loop to create (gridSize x gridSize) div elements ( use that lesson x and y that shows coordinates)
//Apply CSS grid styling for uniform alignment
//Add event listeners for mouse events (drawing)

//Function to handle color selection (COLOR BUTTON)
//When "Color" button is clicked, apply selected color

//Function for Rainbow Mode (RAINBOW BUTTON)
//When "Rainbow" is clicked, assign random color on hover

//Function to clear the grid (CLEAR BUTTON)
//When "Clear" is clicked, reset all grid cells to default color

//Function for Eraser  (ERASER)
//When "Eraser" is clicked, set drawing color to background color

//Function to update grid size
//Clear the existing grid
//Generate a new grid based on selected size (1x1 to 64x64)

//Event listeners for button clicks and input changes
//Listen for color picker change
//Listen for grid size slider change
//Listen for drawing interactions (mousedown, mouseover, mouseup)



const gridContainer = document.querySelector("#grid-container");
const grid = document.querySelector("#grid");


function createGrid(size){

    gridContainer.innerHTML = "";
    const gridSize = Math.floor(600 / size) + "px";

    for(let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.style.border = "0.5px solid black";
        cell.style.width = gridSize;
        cell.style.height = gridSize;
        cell.style.boxSizing = "border-box"
        
        gridContainer.appendChild(cell);
    }

    gridContainer.style.width = 600;
}


const inputGridElement = document.querySelector("#gridSize")
const gridValue = document.querySelector("#gridValue");

inputGridElement.addEventListener("input",function(){
    let size = parseInt(this.value, 10);
    gridValue.textContent = `${size} x ${size}`
    if(this.value > 0 && this.value <= 64){
        return createGrid(size);
    }
});

createGrid(16);







