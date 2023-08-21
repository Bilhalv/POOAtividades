var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [A, B, C] = lines
console.log(`MEDIA = ${(((+A*2)+(+B*3)+(+C*5))/10).toFixed(1)}`)