"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
/*Nº 2 - Faça  um  programa  que  peça  ao  usuário  que  ele  adivinhe  um  número
(geradoaleatoriamente)  no  intervalo  de  0  (zero)  a  30  (trinta),  incluindo  0  e  30.
Oriente  o  usuárioem  cada  rodada,  dizendo  se  o  seu  palpite  é  maior  ou  menor
que  o  número  gerado. O usuário  tem  até  5  (cinco)  chances  de  acertar  o  número.
A  seguir  segue  um  esqueleto  doprograma  que  você  pode  usar,  incluindo  a  função
para  gerar  o  número  aleatório. */
// Número Aleatório
function obterInt(min, max) {
    min = Math.ceil(min); //arredonda  pra  cima        
    max = Math.floor(max); //arredonda  para  baixo        
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 
var num = obterInt(0, 30);
for (var i = 0; i < 5; i++) {
    var palpite = readline.questionInt('Digite  um  numero  (0  a  30) e advinhe o que estou pensando:  ');
    if (palpite === num) {
        console.log("Você é um médium!? Acertou!!!");
        break;
    }
    else if (i == 4) {
        console.log("ERROU! O numero era " + num);
    }
    else if (palpite < num) {
        console.log("Menor do que o número que estou pensando.");
    }
    else if (palpite > num) {
        console.log("Maior do que o número que estou pensando.");
    }
}
