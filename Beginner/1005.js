var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [A, B] = lines
console.log(`MEDIA = ${(((+A*3.5)+(+B*7.5))/11).toFixed(5)}`)