var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [A, B] = lines
console.log("PROD = "+(A*B))