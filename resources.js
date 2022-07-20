
/* ------------------------|
   Definiciones de métodos
| -------------------------*/

// WinPannel

export default function CreateWinPannel(attemps){

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


  const placeToSet = document.getElementById("win-pannel");
  placeToSet.appendChild(winMsg);

}

// Share Icons

export function CreateShareIcons(attemps){
  
  let pageUrl = encodeURI(document.location.href);
  let pageTittle = encodeURI(`He resuelto el juego de Trivify en ${attemps} intentos. ¿Puedes hacerlo mejor?`);
  
  const div = document.getElementById("share-button-container");
  div.setAttribute("class", "share-button-container");

  const twIcon = document.createElement("i");
  const lnIcon = document.createElement("i");
  const waIcon = document.createElement("i");
  const shareIcon = document.createElement("i");

  twIcon.setAttribute("class", "fab fa-twitter");
  lnIcon.setAttribute("class", "fab fa-linkedin");
  waIcon.setAttribute("class", "fab fa-whatsapp");
  shareIcon.setAttribute("class", "fa-solid fa-share");

  const twLink = document.createElement("a");
  const lnLink = document.createElement("a");
  const waLink = document.createElement("a");
  const shLink = document.createElement("a");

  twLink.setAttribute("href", `https://twitter.com/share?text=${pageTittle}&url=${pageUrl}`);
  lnLink.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${pageUrl}`);
  waLink.setAttribute("href", `https://api.whatsapp.com/send?text=${pageTittle} ${pageUrl}`);

  shLink.addEventListener("click", share)

  function share(){
    navigator.share({
      title: 'El Trivigame diario',
      text: pageTittle,
      url: pageUrl,
    })

  }

  twLink.appendChild(twIcon);
  lnLink.appendChild(lnIcon);
  waLink.appendChild(waIcon);
  shLink.appendChild(shareIcon);

  div.appendChild(twLink);
  div.appendChild(lnLink);
  div.appendChild(waLink);
  div.appendChild(shLink);


}



