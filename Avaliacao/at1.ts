let texto = "o ifrn parnamirim possui diversos";

//a
console.log(texto.length);

//b
console.log(texto.indexOf('d'));

//c
function qtd_palavras(texto){
    return texto.split(' ').length;
}

console.log(qtd_palavras(texto));