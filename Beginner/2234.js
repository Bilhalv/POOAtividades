var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [H, P] = lines.shift().split(" ")

console.log((H/P).toFixed(2))