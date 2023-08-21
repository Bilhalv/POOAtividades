var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = lines.shift().split(' ');

for (let i = 1; i <= n; i++) {
    let [x, y, z] = lines.shift().split(' ');
    let total = (((Number(x)*2)+(Number(y)*3)+(Number(z)*5))/10).toFixed(1)
    console.log(total)
}