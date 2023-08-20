var input = require('fs').readFileSync('stdin', 'utf8');
let num = +input;

const notas = [100, 50, 20, 10, 5, 2, 1];
console.log(num)
for (const nota of notas) {
    const quantidade = Math.floor(num / nota);
    console.log(`${quantidade} nota(s) de R$ ${nota},00`);
    num %= nota;
}
