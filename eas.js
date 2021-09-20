var grid = document.getElementById('container')

function createGrid(size){
    for (i = 0; i < size; i++) {
        let cell = document.createElement("div");
        cell.className='cell';
        grid.appendChild(cell);
    }
    grid.style.gridTemplateColumns = "repeat(" + Math.sqrt(size) + ", 50px)";
}

createGrid(100);