var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let x = lines.shift().split(".")
let y = x.pop().split("-")
console.log(x.join("\n"))
console.log(y.join("\n"))
