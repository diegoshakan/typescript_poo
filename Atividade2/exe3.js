"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var aniversariante = readline.question('Qual o nome? ');
var felicitacoes = [
    'Deus te abençoe ' + aniversariante,
    'Meus parabéns, ' + aniversariante,
    'Tudo de bom para você ' + aniversariante,
    'Muitos anos de vida ' + aniversariante,
    'Saúde meu amigo ' + aniversariante
];
var sel = Math.floor(Math.random() * 4);
var pegarNome = function (nome) {
    return felicitacoes[sel];
};
var frases = pegarNome(aniversariante);
console.log(frases);
