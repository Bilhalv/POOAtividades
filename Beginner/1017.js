var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let tempo = Number(lines[0])
let velocidade = Number(lines[1])

console.log(((tempo*velocidade)/12).toFixed(3))