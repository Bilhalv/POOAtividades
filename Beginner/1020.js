var input = require('fs').readFileSync('stdin', 'utf8');
let dias = +input
let tempos = [365, 30, 1]
let nome = ["ano (s)", "mes (es)", "dia (s)"]
for (const tempo of tempos){
    let quantidade = Math.floor(dias / tempo);
    let tempo2 = nome.shift()
    console.log(`${quantidade} ${tempo2}`)
    dias %= tempo
}