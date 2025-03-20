
document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
});


// ----- QuerySelector all the buttons -----
// ----- DOM manipulate them so they have same width and height-----
const colorBtn = document.querySelector("#color");
const colorPicker = document.querySelector("#colorPicker");
const rainbowBtn = document.querySelector("#rainbow");
const clearBtn = document.querySelector("#clear");
const eraserBtn = document.querySelector("#eraser");
let gridContainer = document.querySelector("#grid-container");

const buttons = document.querySelectorAll("#controls button");
buttons.forEach((button)=>{
    button.style.width = "150px";
    button.style.height = "50px";
});


let selectedMode = "color";

const createGrid = function(size){
    //------Clears grid------
    gridContainer.innerHTML = "";


    //------DOM manipulation (columns, rows, grid style, width, height, opacity(disappearance) and borderRadius)
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.width = "600px";
    gridContainer.style.height = "600px";
    gridContainer.style.display = "grid";
    gridContainer.style.border = " 10px solid #e5ece9"
    gridContainer.style.borderRadius = "30px";

    //----- a square is created------
    let numDivs = size * size;

    // -------For loop that creates an element(div), loops it number of divs it is set----------
    // -------Styles it in DOM manipulation-------
    // ------- Appended child to parent-------
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.border = `0.5px solid #e5ece9`;
        div.style.width = "100%";
        div.style.height = "100%";

        gridContainer.appendChild(div);

        //---- When mouse enters div it changes color to black(default)-----
        div.addEventListener("mouseover", function(){
            if(selectedMode === "eraser"){
                div.style.backgroundColor = "#e5ece9";
            }
            else if(selectedMode === "colorPicker"){
                div.style.backgroundColor = colorPicker.value;
            }
            else if(selectedMode === "rainbow"){
                let randomColor = `#` + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
                div.style.backgroundColor = randomColor;
            }
            else if(selectedMode === "color"){
                div.style.backgroundColor = "black";
            };
        });
    };

};

const clearButton = function(){
    document.querySelectorAll("#grid-container div").forEach((div)=>{
        div.style.backgroundColor = "#e5ece9";
    });
};


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


//---- Added functions and eventlisteners for buttons------
colorPicker.addEventListener("input", function(){
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

clearBtn.addEventListener("click",clearButton);


































