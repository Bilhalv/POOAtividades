var input = require('fs').readFileSync('stdin', 'utf8');
let [N, X] = input.split(' ');
console.log(((+X)/((+N)+2)).toFixed(2))