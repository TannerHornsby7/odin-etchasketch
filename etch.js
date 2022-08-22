//populate grid with squares
const grid = document.querySelector('.grid');
const gridrow = document.createElement('div');
const square = document.createElement('div');
const sbutton = document.querySelector('.button.size');
const rbutton = document.querySelector('.button.rainbow')
const stbutton = document.querySelector('.button.standard');

let length = 10;

gridrow.classList.add('gridrow');
square.classList.add('square');

//temp globals
const ROWS = length;
const COLS = length;
let RCOLOR = false;
'black';

function rainbowColor() {
    return  "#" + ((1<<24)*Math.random() | 0).toString(16);
}

stbutton.addEventListener('click', ()=> {
    RCOLOR = false;
})

rbutton.addEventListener('click', () => {
    RCOLOR = true;
})

//populate row
function populateRow(columns, row) {
    for(let j = 0; j < columns; j++) {
        const temps = square.cloneNode(true);
        let id = "cell" + row.id + ":" + j;
        //hover(temps, changeBackground, fadeBack);
        temps.setAttribute('id', id);
        temps.addEventListener("mouseenter", (event) => {
            // highlight the mouseenter target
            if(RCOLOR) {
                event.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
            } else {
            event.target.style.backgroundColor = 'black';
            }
            console.log(event.target.style.color);
          
            // reset the color after a short delay
            setTimeout(() => {
              event.target.style.backgroundColor = "";
            }, 3000);
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
function clearGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
        console.log("child removed");
    }
}

clearGrid();
populateGrid(COLS, ROWS);

sbutton.addEventListener('click', (e) => {
    let str_length = prompt("Please input your desired canvas size(less than 100px):");
    let input_length = parseInt(str_length);
    if(input_length > 100) {
        return alert("Please select a length smaller than 100px");
    }
    clearGrid();
    populateGrid(input_length, input_length);
});

