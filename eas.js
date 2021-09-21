var grid = document.getElementById('container')

function createGrid(size){
    for (i = 0; i < size; i++) {
        let cell = document.createElement("div");
        cell.className='cell';
        grid.appendChild(cell);
    }

    var scale = 500/(Math.sqrt(size));
    grid.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", " + scale + "px)";
    grid.style.gridTemplateRows = "repeat(auto-fill, " + scale + "px)";
}
createGrid(100);