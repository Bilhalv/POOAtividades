var input = require('fs').readFileSync('stdin', 'utf8');
let nums = input.split(' ')
let [a, b, c] = nums.map(x => +x);
let d = Math.pow(b, 2)-4*a*c
if (a !== 0 && d > 0){
    let neg = (-b-Math.sqrt(d))/(2*a)
    let pos = (-b+Math.sqrt(d))/(2*a)
    console.log(`R1 = ${pos.toFixed(5)}`)
    console.log(`R2 = ${neg.toFixed(5)}`)
}else {
    console.log("Impossivel calcular");
}