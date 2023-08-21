var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let A = Number(lines.shift());
let B = Number(lines.shift());
let X = A + B;
console.log(`X = ${X}`);
