document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
});

const colorPickerBtn = document.querySelector("#colorPicker");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const eraserBtn = document.querySelector("#eraser");


const gridSizeDisplay = document.querySelector("#gridSize");
const gridValueDisplay = document.querySelector("#gridValue");

const gridContainerDisplay = document.querySelector("#grid-container");
const gridDisplay = document.querySelector("#grid");



let selectedMode;
let isDrawing = false;


const createGrid = function(size){

    gridContainerDisplay.innerHTML = "";

    gridContainerDisplay.style.display = "grid";
    gridContainerDisplay.style.gridTemplateRows = `repeat(${size}, 1fr)`
    gridContainerDisplay.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainerDisplay.style.overflow = "hidden";
    gridContainerDisplay.style.height = "500";
    gridContainerDisplay.style.width = "500";


    gridContainerDisplay.addEventListener("mousedown",function(e){
        if(e.button == 0){
            isDrawing = true;
            e.preventDefault();
        }
    })

    document.addEventListener("mouseup",function(){
        isDrawing = false;
    });


    for(let i = 0; i < size * size; i++){
        let gridElement = document.createElement("div");
        gridElement.style.border = "0.5px solid black";
        gridElement.style.opacity = "0.6";

        gridContainerDisplay.appendChild(gridElement)


        gridElement.addEventListener("mouseenter", function(){
            if(isDrawing){
                if(selectedMode == "colorPicker"){
                    gridElement.style.backgroundColor = colorPickerBtn.value;
                }
                else if(selectedMode == "color"){
                    gridElement.style.backgroundColor = "black";
                }
                else if(selectedMode == "eraser"){
                    gridElement.style.backgroundColor = "#e5ece9"
                }
                else if(selectedMode == "rainbow"){
                    gridElement.style.backgroundColor = `rgb(
                    ${Math.random()*256},
                    ${Math.random()*256},
                    ${Math.random()*256})`;
                }
            }
        });
    }
}

gridSizeDisplay.addEventListener("input", function(){
    let size = parseFloat(this.value,10);
    if(size > 1 && size <= 64)  createGrid(size);
    gridValueDisplay.textContent = `${size} x ${size}`;
});

clearBtn.addEventListener("click",function(){
    let elements = document.querySelectorAll("#grid-container div");
    elements.forEach((element)=>{
        element.style.backgroundColor = "#e5ece9";
    });
});

colorPickerBtn.addEventListener("click", function(){
    selectedMode = "colorPicker";
});

colorBtn.addEventListener("click", function(){
    selectedMode = "color";
});

rainbowBtn.addEventListener("click", function(){
    selectedMode = "rainbow";
});

eraserBtn.addEventListener("click", function(){
    selectedMode = "eraser";
});





































