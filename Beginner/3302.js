var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let num = Number(lines.shift())

for (let i = 1; i <= num; i++) {
    let x = lines.shift()
    console.log(`resposta ${i}: ${x}`)
}