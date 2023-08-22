var input = require('fs').readFileSync('stdin', 'utf8');
var nums = input.split(' ').map(Number);
nums.sort(function(a, b) {
    return b - a; // Ordenando em ordem decrescente
});
let [A, B, C] = nums;

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO RETANGULO");
    }
    if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && A === C) {
        console.log("TRIANGULO EQUILATERO");
    } else if (A === B || A === C || B === C) {
        console.log("TRIANGULO ISOSCELES");
    }
}
