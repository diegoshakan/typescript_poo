import * as readline from 'readline-sync';

let aniversariante: string = readline.question('Qual o nome? ');

let felicitacoes: string[] = [
    'Deus te abençoe ' + aniversariante,
    'Meus parabéns, ' + aniversariante,
    'Tudo de bom para você ' + aniversariante,
    'Muitos anos de vida ' + aniversariante,
    'Saúde meu amigo ' + aniversariante]

let sel: number = Math.floor(Math.random() * 4);

var pegarNome = function (nome) {
    return felicitacoes[sel];
}

let frases = pegarNome(aniversariante);
console.log(frases)