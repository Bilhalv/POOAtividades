var input = require('fs').readFileSync('stdin', 'utf8');
let num = +input;
let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]
console.log("NOTAS:")
for (const nota of notas) {
    const quantidade = Math.floor(num / nota);
    console.log(`${quantidade} nota(s) de R$ ${nota}.00`);
    num %= nota;
}
console.log("MOEDAS:")
for (const moeda of moedas) {
    const quantidade = Math.floor(num / moeda);
    console.log(`${quantidade} moeda(s) de R$ ${moeda.toFixed(2)}`);
    num = (num%moeda).toFixed(2);
}