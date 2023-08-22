var input = require('fs').readFileSync('stdin', 'utf8');
var nums = input.split(' ');
let [a, b] = nums.map(Number)
let total = 0
if (a > b) {
    total += 24-a+b
} else if(a == b){
    total += 24
} else{
    total += b-a
}
console.log(`O JOGO DUROU ${total} HORA(S)`);