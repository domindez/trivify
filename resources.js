
/* ------------------------|
   Definiciones de métodos
| -------------------------*/

// WinPannel

export default function CreateWinPannel(attemps){

  const fragment = document.createDocumentFragment();

  const winMsgText = `Lo has resuelto en ${attemps} intentos.`
  const winMsgText2 = `¡Comparte tu resultado y reta a tus amigos!`

  const winMsg = document.createElement("p");
  winMsg.setAttribute("id", "win-msg");
  winMsg.setAttribute("class", "win-msg");

  const br = document.createElement("br");
  const br2 = document.createElement("br");
  const text1 = document.createTextNode(`¡Enhorabuena!`);
  const text2 = document.createTextNode(winMsgText);
  const text3 = document.createTextNode(winMsgText2);
  
  winMsg.appendChild(text1);
  winMsg.appendChild(br);
  winMsg.appendChild(text2);
  winMsg.appendChild(br2);
  winMsg.appendChild(text3);

  fragment.appendChild(winMsg);


  const placeToSet = document.getElementById("win-pannel");
  placeToSet.appendChild(fragment);

}

// Share Icons

export function CreateShareIcons(attemps){
  
  const fragmentGame = document.createDocumentFragment();

  let pageUrl = encodeURI(document.location.href);
  let pageTittle = encodeURI(`He resuelto el juego de Trivify en ${attemps} intentos. ¿Puedes hacerlo mejor?`);
  let pageTittleAlt = `He resuelto el juego de Trivify en ${attemps} intentos. ¿Puedes hacerlo mejor?`;
  
  const div = document.getElementById("share-button-container");
  div.setAttribute("class", "share-button-container");

  const twIcon = document.createElement("i");
  const telIcon = document.createElement("i");
  const waIcon = document.createElement("i");
  const shareIcon = document.createElement("i");

  twIcon.setAttribute("class", "fab fa-twitter");
  telIcon.setAttribute("class", "fab fa-telegram");
  waIcon.setAttribute("class", "fab fa-whatsapp");
  shareIcon.setAttribute("class", "fa-solid fa-share");

  const twLink = document.createElement("a");
  const telLink = document.createElement("a");
  const waLink = document.createElement("a");
  const shLink = document.createElement("a");

  twLink.setAttribute("href", `https://twitter.com/share?text=${pageTittle}&url=${pageUrl}`);
  telLink.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${pageUrl}`);
  waLink.setAttribute("href", `https://api.whatsapp.com/send?text=${pageTittle} ${pageUrl}`);
  telLink.setAttribute("href", `https://telegram.me/share/url?url=${pageUrl}&text=${pageTittle}`);

  shLink.addEventListener("click", share)

  function share(){
    navigator.share({
      title: 'El Trivigame diario',
      text: pageTittleAlt,
      url: pageUrl,
    })

  }

  twLink.appendChild(twIcon);
  telLink.appendChild(telIcon);
  waLink.appendChild(waIcon);
  shLink.appendChild(shareIcon);

  fragmentGame.appendChild(twLink);
  fragmentGame.appendChild(telLink);
  fragmentGame.appendChild(waLink);
  fragmentGame.appendChild(shLink);

  div.appendChild(fragmentGame);


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

