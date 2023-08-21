var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split(' '); // Remova espaços em branco no início e no fim

let nums = lines.map(x => +x)
nums.sort(function(a, b) {
    return a - b; // Função de comparação correta para ordenação
});

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log(""); // Imprime uma linha em branco

for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}
