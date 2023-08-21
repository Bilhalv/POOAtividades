var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let nums1 = lines.shift().split(" ");
let [a, b, c, d] = nums1.map((x) => +x);
let media1 = +((a*2 + b*3 + c*4 + d*1) / 10).toFixed(1);
let e1 = lines.shift();
let e = +e1;

console.log("Media: " + media1);
if (media1 >= 7) {
  console.log("Aluno aprovado.");
} else if (media1 >= 5) {
  console.log("Aluno em exame.");
  console.log("Nota do exame: " + e.toFixed(1));
  if (((media1 + e) / 2) >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final: " + ((media1 + e) / 2).toFixed(1));
} else {
  console.log("Aluno reprovado.");
}
