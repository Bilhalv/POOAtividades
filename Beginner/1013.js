var input = require('fs').readFileSync('stdin', 'utf8');
let numeros = input.split(" ")
let [a, b, c] = numeros.map(x => parseInt(x))
let maiorAB = (a + b + Math.abs(a-b)) / 2;
let maiorABC = (maiorAB + c + Math.abs(maiorAB-c)) / 2;
console.log(maiorABC+" eh o maior") 