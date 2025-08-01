/* O principal objetivo deste desafio 
  é fortalecer suas habilidades em lógica 
  de programação. Aqui você deverá desenvolver 
  a lógica para resolver o problema.
*/

let result = document.querySelector("#resultado");
let friendList = document.querySelector("#listaAmigos");
let friendArray = [];

function addFriend() {
  let friendName = document.querySelector("#amigo");

  if (!friendName.value) {
    alert("Preencha o campo de nome");
    return;
  }

  const listItem = document.createElement("li");
  const itemText = document.createTextNode(friendName.value);

  listItem.appendChild(itemText);
  friendList.appendChild(listItem);
  friendArray.push(friendName.value);

  friendName.value = "";
}

function sortFriend() {
  let randomNumber = generateRandomNumber();
  let friend = friendArray[randomNumber];

  if (!friend) {
    alert("Cadastre seus amigos");
    return;
  }

  const paragraph = document.createElement("p");
  const itemText = document.createTextNode("Amigo sorteado: " + friend);

  if (result.firstChild) {
    const child = document.querySelector(".result-value");
    result.removeChild(child);
    paragraph.appendChild(itemText);
    paragraph.setAttribute("class", "result-value");
    result.appendChild(paragraph);
  } else {
    paragraph.appendChild(itemText);
    paragraph.setAttribute("class", "result-value");
    result.appendChild(paragraph);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * (friendArray.length - 1));
}
