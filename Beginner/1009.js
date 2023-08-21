var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let nome = lines.shift()
let salario = Number(lines[0])
let vendas = Number(lines[1])

console.log(`TOTAL = R$ ${(salario+vendas*0.15).toFixed(2)}`)