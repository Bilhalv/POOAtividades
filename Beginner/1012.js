var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split(" ");
let D = Number(A)+Number(B)
	
console.log(`TRIANGULO: ${(1/2*A*C).toFixed(3)}`)
console.log(`CIRCULO: ${(3.14159*Math.pow(C,2)).toFixed(3)}`)
console.log(`TRAPEZIO: ${(1/2*(D)*C).toFixed(3)}`)
console.log(`QUADRADO: ${(B*B).toFixed(3)}`)
console.log(`RETANGULO: ${(A*B).toFixed(3)}`)