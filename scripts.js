
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
const b34 = document.getElementById("b32");
const b44 = document.getElementById("b44");

b21.addEventListener("click", () => {
    if ((b11.classList.contains("green") || b31.classList.contains("green") || 
    b22.classList.contains("green")) && !(b21.classList.contains("death")))
        b21.classList.add("pushed");
    else if (b21.classList.contains("death"))
        b21.classList.add("red");
})


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