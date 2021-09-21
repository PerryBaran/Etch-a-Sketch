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
        cell.className='cell';
        grid.appendChild(cell);
    }

    grid.style.gridTemplateColumns = 'repeat(' + size + ', ' + 500/size + 'px)';
    grid.style.gridTemplateRows = 'repeat(auto-fill, ' + 500/size + 'px)';
}


grid.addEventListener("mouseover", function(event) {
var color = document.getElementById("color").value;
event.target.style.backgroundColor = color;
grid.style.backgroundColor = 'white';
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