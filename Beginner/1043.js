var input = require('fs').readFileSync('stdin', 'utf8');
var nums = input.split(' ');
let [a, b, c] = nums.map(Number)
if(c < a+b&& a < c+b&& b < a+c){
    console.log("Perimetro = "+(a+b+c).toFixed(1))
} else {
    console.log("Area = "+(((a+b)*c)/2).toFixed(1));
}