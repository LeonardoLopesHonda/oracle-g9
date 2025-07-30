showDefaultText();

let range = 10;
let generatedNumbers = [];
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
  if ("speechSynthesis in window") {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speech API não suportada neste navegador");
  }
}

function putsValue(tag, text) {
  let field = document.querySelector(tag);
  field.value = text;
}

function generateRandomNumber() {
  let randomNumber = parseInt(Math.random() * range + 1);

  if (generatedNumbers.length == range / 2) {
    generatedNumbers = [];
  }

  if (generatedNumbers.includes(randomNumber)) {
    return generateRandomNumber();
  }
  console.log(generatedNumbers);
  generatedNumbers.push(randomNumber);
  return randomNumber;
}

function cleanField() {
  putsValue("input", "");
}

function showDefaultText() {
  putsHTML("h1", "Jogo do Número Secreto");
  putsHTML("p", "Escolha um número entre 1 e 10");
}
