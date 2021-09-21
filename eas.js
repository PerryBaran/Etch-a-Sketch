var grid = document.getElementById('container')

function createGrid(size){
    for (i = 0; i < size; i++) {
        let cell = document.createElement("div");
        cell.className='cell';
        grid.appendChild(cell);
    }

    grid.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", " + 500/(Math.sqrt(size)) + "px)";
    grid.style.gridTemplateRows = "repeat(auto-fill, " + 500/(Math.sqrt(size)) + "px)";
}


grid.addEventListener("mouseover", function(event) {
event.target.style.backgroundColor = "black";
});

createGrid(16*16);