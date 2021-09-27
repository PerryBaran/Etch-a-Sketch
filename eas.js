var grid = document.getElementById("container")

function reset(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function createGrid(size){
    reset(grid);

    for (i = 0; i < (size*size); i++) {
        let cell = document.createElement("div");
        cell.className = 'cell';
        grid.appendChild(cell);
    }

    grid.style.gridTemplateColumns = 'repeat(' + size + ', ' + 100/size + '%)';
    grid.style.gridTemplateRows = 'repeat(auto-fill, ' + 100/size + '%)';
}


grid.addEventListener("mouseover", function(event) {
const rainbow = document.getElementById("rainbow");
    if (rainbow.checked) {
        var color = 'rgba(' + Math.floor(Math.random()*250) + ', ' + Math.floor(Math.random()*250) + ', ' + Math.floor(Math.random()*250) + ')'
    }
    else {
        var color = document.getElementById("color").value; 
    }
event.target.style.backgroundColor = color;
grid.style.backgroundColor = '';
grid.style.opacity = 1;

const transparency = document.getElementById("transparency");
    if (transparency.checked) {
        var cellOpacity = event.target.style.opacity;
        var opacity = Number(cellOpacity) + 0.1;  
        
    }
    else {
        var opacity = 1;
    }
event.target.style.opacity = opacity;
});


var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = '16 x 16';
slider.oninput = function() {
    output.innerHTML = this.value + " x " + this.value;
}
slider.addEventListener("click", function(){
    var sliderValue = slider.value;
    createGrid(sliderValue);
});

var clear = document.getElementById("clear");
clear.addEventListener("click", function(){
    var sliderValue = slider.value;
    createGrid(sliderValue);
});


createGrid(16);