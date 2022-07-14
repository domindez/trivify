
// Toggle Menu

const toggleMenu = document.getElementById("toggleButton");
const menu = document.getElementById("main-menu");

toggleMenu.addEventListener("click", () => menu.classList.toggle("menu-show"))

// Lógica del Juego


const b11 = document.getElementById("b11");
const b21 = document.getElementById("b21");
const b31 = document.getElementById("b31");
const b41 = document.getElementById("b41");
const b12 = document.getElementById("b12");
const b22 = document.getElementById("b22");
const b32 = document.getElementById("b32");
const b42 = document.getElementById("b42");
const b13 = document.getElementById("b13");
const b23 = document.getElementById("b23");
const b33 = document.getElementById("b33");
const b43 = document.getElementById("b43");
const b14 = document.getElementById("b14");
const b24 = document.getElementById("b24");
const b34 = document.getElementById("b34");
const b44 = document.getElementById("b44");

const grid = [
    { 
      adjacentCells: ['b12', 'b21'],
      cell: b11, 
      id: 'b11',
      head: true,
    },
    {
      adjacentCells: ['b11', 'b31', 'b22'],
      cell: b21,
      id: 'b21',
      head: false,
    },
    {
      adjacentCells: ['b21', 'b41', 'b32'],
      cell: b31,
      id: 'b31',
      head: false,
    },
    {
      adjacentCells: ['b31', 'b42'],
      cell: b41,
      id: 'b41',
      head: false,
    },
    {
      adjacentCells: ['b11', 'b22', 'b13'],
      cell: b12,
      id: 'b12',
      head: false,
    },
    {
      adjacentCells: ['b12', 'b32', 'b21', 'b23'],
      cell: b22,
      id: 'b22',
      head: false,
    },
    {
      adjacentCells: ['b31', 'b22', 'b33', 'b42'],
      cell: b32,
      id: 'b32',
      head: false,
    },
    {
      adjacentCells: ['b41', 'b32', 'b43'],
      cell: b42,
      id: 'b42',
      head: false,
    },
    {
      adjacentCells: ['b12', 'b23', 'b14'],
      cell: b13,
      id: 'b13',
      head: false,
    },
    {
      adjacentCells: ['b22', 'b33', 'b24', 'b13'],
      cell: b23,
      id: 'b23',
      head: false,
    },
    {
      adjacentCells: ['b32', 'b34', 'b23', 'b43'],
      cell: b33,
      id: 'b33',
      head: false,
    },
    {
      adjacentCells: ['b42', 'b44', 'b33'],
      cell: b43,
      id: 'b43',
      head: false,
    },
    {
      adjacentCells: ['b13', 'b24'],
      cell: b14,
      id: 'b14',
      head: false,
    },
    {
      adjacentCells: ['b14', 'b23', 'b34'],
      cell: b24,
      id: 'b24',
      head: false,
    },
    {
      adjacentCells: ['b24', 'b33', 'b44'],
      cell: b34,
      id: 'b34',
      head: false,
    },
    {
      adjacentCells: ['b43', 'b34'],
      cell: b44,
      id: 'b44',
      head: false,
    },

]

grid.forEach((element) => {
    element.cell.addEventListener("click", function establishColor() {
      if (this.classList.contains("death")) {
        this.classList.add("red");
      } else {
        element.adjacentCells.forEach((e) => {
          const selectedCell = grid.find((cell) => cell.id === e);
          if (selectedCell.head && selectedCell && selectedCell.cell.classList.contains("green") && !this.classList.add("green")) {
            this.classList.add("green");
            
          }
        });
      }
    });
  });


/*/ Definir el cuadrado de juego
const square = document.getElementById("square");

// Crear el fragment
const fragmentGame = document.createDocumentFragment();

// Crear las cajitas
const gameBox = document.createElement("button");

// Añadir la clase clase a la cajita
gameBox.classList.add("square__button");

// Añadir el elemento al fragment
fragmentGame.appendChild(gameBox);

// Añadir el fragment al DOM
square.appendChild(fragmentGame);*/