/* 
    Desafio 1 - Crie uma função que calcule o 
    índice de massa corporal (IMC) de uma pessoa, 
    a partir de sua altura, em metros, e peso, 
    em quilogramas, que serão recebidos como parâmetro.
*/
function calculateIMC(weight, height) {
  return weight / (height * height);
}

function printIMCStatus(imc) {
  if (imc < 18.5) {
    return "Magreza";
  } else if (imc >= 18.5 && imc <= 24.99) {
    return "Normal";
  } else if (imc >= 25.0 && imc <= 29.99) {
    return "Sobrepreso";
  } else if (imc >= 30.0 && imc <= 39.99) {
    return "Obesidade";
  }
  return "Obesidade Grave";
}

let imc = calculateIMC(80, 1.74);
console.log(`IMC: ${imc} | ${printIMCStatus(imc)}`);

/* 
  Desafio 2 - Crie uma função que 
  calcule o valor do fatorial de 
  um número passado como parâmetro.
*/

let factorialNumber = 5;
let factorialString = "";

for (let i = factorialNumber; i > 0; i--) {
  if (i == 1) {
    factorialString += i;
  } else {
    factorialString += i + " * ";
  }
}

console.log(
  `${factorialNumber}! = ${factorialString} = ${calculateFactorial(
    factorialNumber
  )}`
);

function calculateFactorial(factorialNumber) {
  if (factorialNumber == 1) return factorialNumber;

  return factorialNumber * calculateFactorial(factorialNumber - 1);
}

/* 
  Desafio 3 - Crie uma função que converte 
  um valor em dólar, passado como parâmetro, 
  e retorna o valor equivalente em reais. 
  Para isso, considere a cotação do dólar igual a R$4,80.
*/

let moneyAmount = 6;

console.log(`US$ ${moneyAmount} = R$ ${dolarToReais(moneyAmount)}`);

function dolarToReais(amount) {
  let dolarCotation = 4.8;

  return amount * dolarCotation;
}

/* 
  Desafio 4 - Crie uma função que mostre 
  na tela a área e o perímetro de uma sala 
  retangular, utilizando altura e largura 
  que serão dadas como parâmetro.
*/

showRectangleSizes(5, 4);

function showRectangleSizes(base, height) {
  console.log(
    `Tamanhos do Retângulo ${base}x${height}\nÁrea: ${calculateAreaRectangle(
      base,
      height
    )}\nPerímetro: ${calculatePerimeterRectangle(base, height)}`
  );
}

function calculateAreaRectangle(base, height) {
  return base * height;
}

function calculatePerimeterRectangle(base, height) {
  return base * 2 + height * 2;
}

/* 
  Desafio 5 - Crie uma função que mostre 
  na tela a área e o perímetro de uma sala 
  circular, utilizando seu raio que será 
  fornecido como parâmetro. Considere Pi = 3,14.
*/

let pi = 3.14;

showCircleSizes(10);

function showCircleSizes(radius) {
  console.log(
    `Tamanhos do Círculo de raio (${radius})\nÁrea: ${calculateAreaCircle(
      radius
    )}\nPerímetro: ${calculatePerimeterCircle(radius)}`
  );
}

function calculateAreaCircle(radius) {
  return pi * (radius * radius);
}

function calculatePerimeterCircle(radius) {
  return 2 * pi * radius;
}

/* 
  Desafio 6 - Crie uma função que mostre 
  na tela a tabuada de um número dado como parâmetro.
*/

showMultiplicationTable(5);

function showMultiplicationTable(number) {
  console.log(`
    ${number} x 1 = ${number}
    ${number} x 2 = ${number * 2}
    ${number} x 3 = ${number * 3}
    ${number} x 4 = ${number * 4}
    ${number} x 5 = ${number * 5}
    ${number} x 6 = ${number * 6}
    ${number} x 7 = ${number * 7}
    ${number} x 8 = ${number * 8}
    ${number} x 9 = ${number * 9}
    ${number} x 10 = ${number * 10}
  `);
}
