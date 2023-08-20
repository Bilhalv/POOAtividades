var input = require('fs').readFileSync('stdin', 'utf8');
let num = +input
console.log(`${Math.floor(num/3600)}:${Math.floor((num%3600)/60)}:${Math.floor(num%60)}`)