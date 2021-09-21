var grid = document.getElementById('container')

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

    grid.style.gridTemplateColumns = "repeat(" + size + ", " + 500/size + "px)";
    grid.style.gridTemplateRows = "repeat(auto-fill, " + 500/size + "px)";
}


grid.addEventListener("mouseover", function(event) {
event.target.style.backgroundColor = "black";
grid.style.backgroundColor = 'white';
});

var slider = document.getElementById("slider");
var output = document.getElementById("output");

slider.oninput = function() {
    output.innerHTML = this.value + " x " + this.value;
}

slider.addEventListener("click", function(){
    var sliderValue = slider.value;
    createGrid(sliderValue);
});

