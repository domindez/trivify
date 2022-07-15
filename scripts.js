
// Toggle Menu

const toggleMenu = document.getElementById("toggleButton");
const menu = document.getElementById("main-menu");

toggleMenu.addEventListener("click", () => menu.classList.toggle("menu-show"))

// Lógica del Juego

const b11 = document.getElementById("b11");
const b12 = document.getElementById("b12");
const b13 = document.getElementById("b13");
const b14 = document.getElementById("b14");
const b15 = document.getElementById("b15");
const b16 = document.getElementById("b16");
const b21 = document.getElementById("b21");
const b22 = document.getElementById("b22");
const b23 = document.getElementById("b23");
const b24 = document.getElementById("b24");
const b25 = document.getElementById("b25");
const b26 = document.getElementById("b26");
const b31 = document.getElementById("b31");
const b32 = document.getElementById("b32");
const b33 = document.getElementById("b33");
const b34 = document.getElementById("b34");
const b35 = document.getElementById("b35");
const b36 = document.getElementById("b36");
const b41 = document.getElementById("b41");
const b42 = document.getElementById("b42");
const b43 = document.getElementById("b43");
const b44 = document.getElementById("b44");
const b45 = document.getElementById("b45");
const b46 = document.getElementById("b46");
const b51 = document.getElementById("b51");
const b52 = document.getElementById("b52");
const b53 = document.getElementById("b53");
const b54 = document.getElementById("b54");
const b55 = document.getElementById("b55");
const b56 = document.getElementById("b56");
const b61 = document.getElementById("b61");
const b62 = document.getElementById("b62");
const b63 = document.getElementById("b63");
const b64 = document.getElementById("b64");
const b65 = document.getElementById("b65");
const b66 = document.getElementById("b66");
const b71 = document.getElementById("b71");
const b72 = document.getElementById("b72");
const b73 = document.getElementById("b73");
const b74 = document.getElementById("b74");
const b75 = document.getElementById("b75");
const b76 = document.getElementById("b76");
const b81 = document.getElementById("b81");
const b82 = document.getElementById("b82");
const b83 = document.getElementById("b83");
const b84 = document.getElementById("b84");
const b85 = document.getElementById("b85");
const b86 = document.getElementById("b86");
const b91 = document.getElementById("b91");
const b92 = document.getElementById("b92");
const b93 = document.getElementById("b93");
const b94 = document.getElementById("b94");
const b95 = document.getElementById("b95");
const b96 = document.getElementById("b96");



const grid = [
    { 
      adjacentCells: ['b12', 'b21'],
      cell: b11, 
      id: 'b11',
      head: true,
      death: false,
    },
    {
      adjacentCells: ['b11', 'b13', 'b22'],
      cell: b12,
      id: 'b12',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b12', 'b14', 'b23'],
      cell: b13,
      id: 'b13',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b13', 'b15', 'b24'],
      cell: b14,
      id: 'b14',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b14', 'b25', 'b16'],
      cell: b15,
      id: 'b15',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b15', 'b26',],
      cell: b16,
      id: 'b16',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b11', 'b31', 'b22'],
      cell: b21,
      id: 'b21',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b12', 'b32', 'b21', 'b23'],
      cell: b22,
      id: 'b22',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b13', 'b33', 'b22', 'b24'],
      cell: b23,
      id: 'b23',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b14', 'b34', 'b23', 'b25'],
      cell: b24,
      id: 'b24',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b15', 'b35', 'b24', 'b26'],
      cell: b25,
      id: 'b25',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b16', 'b36', 'b25'],
      cell: b26,
      id: 'b26',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b21', 'b41', 'b32'],
      cell: b31,
      id: 'b31',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b31', 'b33', 'b22', 'b42'],
      cell: b32,
      id: 'b32',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b32', 'b34', 'b23', 'b43'],
      cell: b33,
      id: 'b33',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b35', 'b33', 'b24', 'b44'],
      cell: b34,
      id: 'b34',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b34', 'b36', 'b25', 'b245'],
      cell: b35,
      id: 'b35',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b26', 'b46', 'b35'],
      cell: b36,
      id: 'b36',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b42', 'b31', 'b51'],
      cell: b41,
      id: 'b41',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b41', 'b43', 'b32', 'b52'],
      cell: b42,
      id: 'b42',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b42', 'b44', 'b33', 'b53'],
      cell: b43,
      id: 'b43',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b43', 'b45', 'b34', 'b54'],
      cell: b44,
      id: 'b44',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b44', 'b46', 'b35', 'b55'],
      cell: b45,
      id: 'b45',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b45', 'b36', 'b56'],
      cell: b46,
      id: 'b46',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b52', 'b41', 'b61'],
      cell: b51,
      id: 'b51',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b51', 'b53', 'b42', 'b62'],
      cell: b52,
      id: 'b52',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b52', 'b54', 'b43', 'b63'],
      cell: b53,
      id: 'b53',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b53', 'b55', 'b44', 'b64'],
      cell: b54,
      id: 'b54',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b45', 'b65', 'b54', 'b56'],
      cell: b55,
      id: 'b55',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b55', 'b46', 'b66'],
      cell: b56,
      id: 'b56',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b62', 'b51', 'b71'],
      cell: b61,
      id: 'b61',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b61', 'b63', 'b52', 'b72'],
      cell: b62,
      id: 'b62',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b62', 'b64', 'b53', 'b73'],
      cell: b63,
      id: 'b63',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b63', 'b65', 'b54', 'b74'],
      cell: b64,
      id: 'b64',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b64', 'b66', 'b55', 'b75'],
      cell: b65,
      id: 'b65',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b65', 'b56', 'b76'],
      cell: b66,
      id: 'b66',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b72', 'b61', 'b81'],
      cell: b71,
      id: 'b71',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b71', 'b73', 'b62', 'b82'],
      cell: b72,
      id: 'b72',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b72', 'b74', 'b63', 'b83'],
      cell: b73,
      id: 'b73',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b73', 'b75', 'b64', 'b84'],
      cell: b74,
      id: 'b74',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b74', 'b76', 'b65', 'b85'],
      cell: b75,
      id: 'b75',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b75', 'b66', 'b86'],
      cell: b76,
      id: 'b76',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b82', 'b71', 'b91'],
      cell: b81,
      id: 'b81',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b81', 'b83', 'b72', 'b92'],
      cell: b82,
      id: 'b82',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b82', 'b84', 'b73', 'b93'],
      cell: b83,
      id: 'b83',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b83', 'b85', 'b74', 'b94'],
      cell: b84,
      id: 'b84',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b84', 'b86', 'b75', 'b95'],
      cell: b85,
      id: 'b85',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b85', 'b96', 'b76'],
      cell: b86,
      id: 'b86',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b81', 'b92'],
      cell: b91,
      id: 'b91',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b91', 'b93', 'b82'],
      cell: b92,
      id: 'b92',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b92', 'b94', 'b83'],
      cell: b93,
      id: 'b93',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b93', 'b95', 'b84'],
      cell: b94,
      id: 'b94',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b94', 'b96', 'b85'],
      cell: b95,
      id: 'b95',
      head: false,
      death: false,
    },
    {
      adjacentCells: ['b95', 'b86'],
      cell: b96,
      id: 'b96',
      head: false,
      death: false,
    },
    
]

// Lista de casillas trampa
const deathTiles = grid.filter(obj => {
  return obj.id == "b24" || obj.id === "b26" || obj.id === "b36" || obj.id === "b41" || obj.id === "b44"
  || obj.id === "b62" || obj.id === "b65" || obj.id === "b73" || obj.id === "b86" || obj.id === "b81"
  || obj.id === "b84" || obj.id === "b85" || obj.id === "b23"
})

// Aplicar trampa a las casillas
deathTiles.forEach(element => {
  element.death = true;
});

// Quitar comentario de abajo para ver las casillas trampa.

// grid.forEach(element => {
//   if (element.death == true){
//     element.cell.classList.add("red");
//   }
// });


let attemps = 1;

grid.forEach((element) => {

    element.cell.addEventListener("click", function establishColor() {     

      element.adjacentCells.forEach((e) => {

        const selectedCell = grid.find((cell) => cell.id === e);

        if (selectedCell.head && selectedCell.cell.classList.contains("green") && element.death == false && !element.cell.classList.contains("green")) {    // si pulsas una sin muerte
            
          this.classList.add("green");   

          element.head=true;   // el que clicas

          selectedCell.head=false;  // el anterior

          this.classList.add("head-color");

          selectedCell.cell.classList.remove("head-color");

          
        }
        else if (selectedCell.head && selectedCell.cell.classList.contains("green") && element.death) {    // si pulsas una muerte

          this.classList.add("red");

          selectedCell.head=false;

          setTimeout(endgame, 2000);
          
          
        
        }
      });        
      });
  });

  let endgame = function() {
  
    grid.forEach(element => {
      element.cell.classList.remove("green");
      element.cell.classList.remove("head-color");
      element.cell.classList.remove("red");
    });
  
    b11.classList.add("green");
    grid[0].head=true;
    attemps++;
  
  
    // TO DO 
  
    // Hacer tb que por cada pared que
  
  }

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