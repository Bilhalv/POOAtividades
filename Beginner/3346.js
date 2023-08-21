var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [a, b] = lines.shift().split(" ")

console.log(((((1.0 + a/100.00) * (1.0 + b/100.00)) - 1.0) * 100.0).toFixed(6))