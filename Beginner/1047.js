var input = require('fs').readFileSync('stdin', 'utf8');
var nums = input.split(' ');
let [a, a2, b, b2] = nums.map(Number)
let totalh = 0
if (a > b) {
    totalh += 24-a+b
} else if(a === b && a2 === b2){
    totalh += 24
} else if(b > a){
    totalh += b-a
}
let totalm = 0
if (a2 > b2){
    totalm += 60+b2-a2
    if (totalh < 24) {
        totalh --
        if (totalh < 0) {
            totalh = 23
        }
    }
} else if(b2 > a2){
    totalm += -a2+b2
}
if (totalh == 24 && totalm > 0) {
    totalm = 0
}
console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`);