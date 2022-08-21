//populate grid with squares
const grid = document.querySelector('.grid');
const gridrow = document.createElement('div');
const square = document.createElement('div');
gridrow.classList.add('gridrow');
square.classList.add('square');

//temp globals
const ROWS = 16;
const COLS = 16;
const TOTAL = ROWS * COLS;

//populate row
function populateRow(columns, row) {
    for(let j = 0; j < columns; j++) {
        const temps = square.cloneNode(true);
        let id = "cell" + row.id + ":" + j;
        //hover(temps, changeBackground, fadeBack);
        temps.setAttribute('id', id);
        temps.addEventListener("mouseenter", (event) => {
            // highlight the mouseenter target
            event.target.style.backgroundColor = "purple";
            console.log(event.target.style.color);
          
            // reset the color after a short delay
            setTimeout(() => {
              event.target.style.backgroundColor = "";
            }, 500);
          }, false);
        row.appendChild(temps);
    }
}

//populate grid
function populateGrid(columns, rows) {
    for(let i = 0; i < rows; i++) {
        const row = gridrow.cloneNode(true);
        let id = i;
        row.setAttribute('id', id);
        populateRow(columns, row);
        grid.appendChild(row);
    }
}
populateGrid(COLS, ROWS);



