// let title = document.querySelector("h1");
// let paragraph = document.querySelector("p");

// title.innerHTML = "Jogo do Número Secreto";
// paragraph.innerHTML = "Escolha um número entre 1 e 10";

puts("h1", "Jogo do Número Secreto");
puts("p", "Escolha um número entre 1 e 10");

let clicks = 0;
let secretNumber = generateRandomNumber();

function verificarChute() {
  let guess = document.querySelector("input").value;

  console.log(guess == secretNumber);
  clicks++;
}

function puts(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

function generateRandomNumber(params) {
  return parseInt(Math.random() * 10 + 1);
}
