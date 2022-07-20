
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

  const fbIcon = document.createElement("i");
  const twIcon = document.createElement("i");
  const lnIcon = document.createElement("i");
  const waIcon = document.createElement("i");

  fbIcon.setAttribute("class", "fab fa-facebook");
  twIcon.setAttribute("class", "fab fa-twitter");
  lnIcon.setAttribute("class", "fab fa-linkedin");
  waIcon.setAttribute("class", "fab fa-whatsapp");

  const fbLink = document.createElement("a");
  const twLink = document.createElement("a");
  const lnLink = document.createElement("a");
  const waLink = document.createElement("a");

  fbLink.setAttribute("href", `https://www.facebook.com/sharer.php?u=${pageUrl}`);
  twLink.setAttribute("href", `https://twitter.com/share?url=${pageUrl}&text=${pageTittle}`);
  lnLink.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${pageTittle}`);
  waLink.setAttribute("href", `https://api.whatsapp.com/send?text=${pageTittle} ${pageUrl}`);

  fbLink.appendChild(fbIcon);
  twLink.appendChild(twIcon);
  lnLink.appendChild(lnIcon);
  waLink.appendChild(waIcon);

  div.appendChild(fbLink);
  div.appendChild(twLink);
  div.appendChild(lnLink);
  div.appendChild(waLink);


}



