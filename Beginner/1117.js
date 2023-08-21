var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');
let i = 0
let num = 0
do {
    let x = Number(lines.shift())
    if((x >= 0 && x <= 10)&&i==0){
        num = x
        i++
    } else if((x >= 0 && x <= 10)&&i==1){
        console.log("media = "+((num+x)/2).toFixed(2))
        break;
    } else{
        console.log("nota invalida")
    }
} while (true);