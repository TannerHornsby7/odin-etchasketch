//populate grid with squares
const grid = document.querySelector('.grid');
const gridrow = document.createElement('div');
const square = document.createElement('div');
gridrow.classList.add('gridrow');
square.classList.add('square');

function changeBackground() {
    square.classList.add("painted");
    console.log(square);
}

//adding mousover event listener to change pixels
square.addEventListener("mouseover", changeBackground());

for(let j = 0; j < 16; j++) {
    gridrow.appendChild(square.cloneNode(true));
}
for(let i = 0; i < 16; i++) {
    grid.appendChild(gridrow.cloneNode(true));
}

