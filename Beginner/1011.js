var input = require('fs').readFileSync('stdin', 'utf8');
var R = Number(input);
console.log(`VOLUME = ${ ((4/3) * 3.14159 * Math.pow(R, 3)).toFixed(3)}`);