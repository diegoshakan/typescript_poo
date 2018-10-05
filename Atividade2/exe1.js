var nomes = ['Bruno', 'Elaine', 'José', 'Matheus', 'Maria', 'Alana', 'Erika',
    'Alison', 'Lucas', 'Rickson', 'Beatriz', 'Alberto', 'Renata', 'Sayonara'];
console.log('Inicialmente, há', nomes.length, 'nomes na lista.');
//Nº 1.a - Insira dois nomes na lista.
nomes.push('Eduardo', 'Mônica');
//Nº 1.b - Obtenha a quantidade de nomes adicionados.
console.log('Há na lista', nomes.length, 'nomes, após inserção.');
//Nº 1.c - Remova o terceiro nome da lista.
delete nomes[2];
//Nº 1.d - Realize uma busca por um nome qualquer e diga qual é a sua posição na lista.
console.log('O nome Maria está na posição', nomes.lastIndexOf('Maria'), 'da lista de nomes.');
///Nº 1.e - Conte quantos nomes começam com a letra "A".
var count = 0;
for (var i in nomes) {
    if (nomes[i][0] === 'A') {
        count += 1;
    }
}
console.log('Há na lista', count, 'nomes que começam com a letra A.');
var qtd = 0;
nomes.forEach(function (n) {
    if (n.charAt(0) === 'A') {
        qtd += 1;
    }
});
console.log(qtd);
/*// Outro modo de se achar um nome que começa com uma letra específica.
for (let i in nomes){
    if (nomes[i].charAt(0) === 'A'){
        qtd += 1;
    }
}
console.log(qtd);*/ 
