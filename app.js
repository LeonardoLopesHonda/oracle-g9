alert("Boas vindas ao jogo do número secreto");

let numberRange = 1000;

let secretNumber = parseInt(Math.random() * numberRange + 1);
let guessNumber = 0;

let tries = 1;

do {
  guessNumber = parseInt(prompt(`Escolha um número entre 1 e ${numberRange}`));

  if (guessNumber < secretNumber) {
    alert("Errou! O número secreto é maior");
  } else if (guessNumber > secretNumber) {
    alert("Errou! O número secreto é menor");
  } else {
    break;
  }
  tries++;
} while (guessNumber !== secretNumber);

let tentativeString = tries > 1 ? "tentativas" : "tentativa";
alert(
  `Você descobriu o número secreto: ${secretNumber} com ${tries} ${tentativeString}.`
);
