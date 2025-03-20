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


document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
});

let gridContainer = document.querySelector("#grid-container");

const createGrid = function(size){
    //------Clears grid------
    gridContainer.innerHTML = "";


    //------DOM manipulation (columns, rows, grid style, width, height, opacity(disappearance) and borderRadius)
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.width = "600px";
    gridContainer.style.height = "600px";
    gridContainer.style.display = "grid";
    gridContainer.style.opacity ="0.5";
    gridContainer.style.borderRadius = "30px";

    //----- a square is created------
    let numDivs = size * size;

    // -------For loop that creates an element(div), loops it number of divs it is set----------
    // -------Styles it in DOM manipulation-------
    // ------- Appended child to parent-------
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.border = `0.5px solid black`;
        div.style.width = "100%";
        div.style.height = "100%";

        gridContainer.appendChild(div);
    }
}

// ---- EventListener for input and gridValue to change together--------
// ---- QuerySelector for them both ---------
// ---- Turn variable size into integer(in decimal system) ------
// ---- Display gridValue the way it shows -----
// ---- IF condition it cant go below 0 and above 64 ( grid) -----
const gridValue = document.querySelector("#gridValue");
const inputRange = document.querySelector("#gridSize");
inputRange.addEventListener("input",function(){
    let size = parseInt(this.value, 10);
    gridValue.textContent = `${size} x ${size}`
    if(size > 0 && size <= 64) return createGrid(size);
})



// ----- QuerySelector all the buttons -----
// ----- DOM manipulate them so they have same width and height-----
const colorBtn = document.querySelector("#color");
const colorPicker = document.querySelector("#colorPicker");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const eraserBtn = document.querySelector("#eraser");

const buttons = document.querySelectorAll("#controls button");
buttons.forEach((button)=>{
    button.style.width = "150px";
    button.style.height = "50px";
});

//---- Added functions and eventlisteners for buttons------
let selectedColor = "black";
const color = function(){

};

const rainbow = function(){

};

const eraser = function(){

};

const clear = function(){

};


colorBtn.addEventListener("click", color);
colorPicker.addEventListener("input", function(){
    selectedColor = this.value;
});
rainbowBtn.addEventListener("click", rainbow);
eraserBtn.addEventListener("click", eraser);
clearBtn.addEventListener("click",clear);

gridContainer.addEventListener("mousemove", function(){

});































