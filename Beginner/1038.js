const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split(' ');

let code = [0,4,4.5,5,2,1.5];

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());
let Z = (code[X] * Y).toFixed(2);
console.log(`Total: R$ ${Z}`);