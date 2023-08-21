var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let r = lines.shift()
console.log(`A=${(Math.pow(r, 2)*3.14159).toFixed(4)}`)