var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let num = lines.shift()
let bonecos = 0;
let arquitetos = 0;
let musicos = 0;
let desenhistas = 0;

for (let i = 0; i < +num; i++) {
    let [x, y, z] = lines.shift().split(" ")
    if(y == "bonecos"){
        bonecos += +z
    } else if(y == "arquitetos"){
        arquitetos += +z
    } else if(y == "musicos"){
        musicos += +z
    } else {
        desenhistas += +z
    }
}
console.log(Math.floor(+bonecos/8)+Math.floor(+arquitetos/4)+Math.floor(+musicos/6)+Math.floor(+desenhistas/12))