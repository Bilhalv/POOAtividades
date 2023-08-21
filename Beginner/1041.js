var input = require('fs').readFileSync('stdin', 'utf8');
let line = input.split(" ");
let [x, y] = line.map(x => +x)
if (y == 0 && x == 0){
    console.log("Origem");
} else if (y == 0){
    console.log("Eixo X");
} else if(x == 0){
    console.log("Eixo Y");
} else {
    if(x > 0&&y>0){
        console.log("Q1");
    } else if(x > 0&&y<0){
        console.log("Q4");
    } else if(y>0){
        console.log("Q2");
    } else {
        console.log("Q3");
    }
}
