showDefaultText();

let secretNumber = generateRandomNumber();
let tentatives = 1;

function checkGuess() {
  let guess = document.querySelector("input").value;

  if (guess > secretNumber) {
    putsHTML("p", "O número secreto é menor");
  } else if (guess < secretNumber) {
    putsHTML("p", "O número secreto é maior");
  } else {
    let tentativesText = tentatives == 1 ? "tentativa" : "tentativas";

    putsHTML("h1", "Acertou!");
    putsHTML(
      "p",
      `Você descobriu o número secreto com ${tentatives} ${tentativesText}`
    );

    document.querySelector("#reiniciar").removeAttribute("disabled");
  }
  tentatives++;
  cleanField();
}

function newGame() {
  secretNumber = generateRandomNumber();
  tentatives = 1;
  cleanField();

  showDefaultText();

  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function putsHTML(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

function putsValue(tag, text) {
  let field = document.querySelector(tag);
  field.value = text;
}

function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1);
}

function cleanField() {
  putsValue("input", "");
}

function showDefaultText() {
  putsHTML("h1", "Jogo do Número Secreto");
  putsHTML("p", "Escolha um número entre 1 e 10");
}
