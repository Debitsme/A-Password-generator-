const pwE1 = document.getElementById("pw");
const copyE1 = document.getElementById("copy");
const lenE1 = document.getElementById("len");
const upperE1 = document.getElementById("upper");
const lowerE1 = document.getElementById("lower");
const numberE1 = document.getElementById("number");
const symbolE1 = document.getElementById("symbol");
const generateE1 = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function upperLettersCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function lowerLettersCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function numberscase() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function symbolCase() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generator() {
  let length = lenE1.value;
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const x = generateX();
    password += x;
  }

  pwE1.innerText = password;
}

function generateX() {
  let xs = [];
  if (upperE1.checked) {
    xs.push(upperLettersCase());
  }
  if (lowerE1.checked) {
    xs.push(lowerLettersCase());
  }
  if (symbolE1.checked) {
    xs.push(symbolCase());
  }
  if (numberE1.checked) {
    xs.push(numberscase());
  }
  if (xs.length===0) {
    return ""
  }

  return xs[Math.floor(Math.random()*xs.length)]
}

generate.addEventListener("click", generator);

console.log(lenE1.value);
