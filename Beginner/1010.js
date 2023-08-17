var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [N1, M1, P1] = lines.shift().split(" ")
let [N2, M2, P2] = lines.shift().split(" ")
console.log(`VALOR A PAGAR: R$ ${(M1*P1+M2*P2).toFixed(2)}`)