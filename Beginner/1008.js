var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [A, B, C] = lines
console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${(B*C).toFixed(2)}`)