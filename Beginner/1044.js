var input = require('fs').readFileSync('stdin', 'utf8');
var nums = input.split(' ');
let [a, b] = nums.map(Number)

if (a%b == 0||b%a == 0) {
    console.log("Sao Multiplos");
} else{
    console.log("Nao sao Multiplos");
}