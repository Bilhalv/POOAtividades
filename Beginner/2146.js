var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');
var l = lines.length

for (let i = 0; i < l; i++) {
    let x = lines.shift()
    if (1001 <= x && x <= 9999) {
        console.log(x-1)
    }
}