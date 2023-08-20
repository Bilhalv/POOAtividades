var input = require('fs').readFileSync('stdin', 'utf8');
let numeros = input.split("\r\n")
let [a, b] = numeros.map(x => +x)
console.log((a/b).toFixed(3)+" km/l")