"use strict";
/*3. Crie uma classe Livro, contendo os seguintes atributos (ISBN, título, ano de publicação, autor e
editora).
a) Adicione métodos para modificar e obter (consultar) os valores desses atributos. Esses
métodos devem ser públicos e os atributos privados. Leve em consideração que um
ISBN válido deve possuir 4 dígitos (geralmente possuem 13, mas por simplicidade faça
com 4) e que o ano de publicação do livro deve ser menor ou igual que o ano corrente.
b) Crie um construtor que receba todas as informações necessárias para se criar um
novo livro.*/
exports.__esModule = true;
var Livro = /** @class */ (function () {
    function Livro(isbn, ti, pub, aut, edi) {
        this.isbn = isbn;
        this.titulo = ti;
        this.pubicacao = pub;
        this.autor = aut;
        this.editora = edi;
    }
    Livro.prototype.modiISBN = function (i) {
        this.isbn = i;
    };
    Livro.prototype.modiTitulo = function (t) {
        this.titulo = t;
    };
    Livro.prototype.modiAno = function (ano) {
        this.pubicacao = ano;
    };
    Livro.prototype.modiAutor = function (a) {
        this.autor = a;
    };
    Livro.prototype.modiEdi = function (e) {
        this.editora = e;
    };
    Livro.prototype.getISBN = function () {
        return this.isbn;
    };
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAno = function () {
        return this.pubicacao;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getEdi = function () {
        return this.editora;
    };
    Livro.prototype.getDados = function () {
        return "ISBN: " + this.isbn + ",\nT\u00EDtulo: " + this.titulo + ",\nAno de publica\u00E7\u00E3o: " + this.pubicacao + ",\nAutor: " + this.autor + ",\nEditora: " + this.editora;
    };
    return Livro;
}());
exports.Livro = Livro;
// Teste para saber se o número do ISBN é válido
while (true) {
    var isbn = "12345";
    if (isbn.length >= 4) {
        break;
    }
}
var title = "O Alienista";
// Teste para saber se o ano é válido, ou seja, menor que 2018, ano atual.
// Poderíamos usar também a função Date para dar uma incrementada nessa parte.
while (true) {
    var ano = 1948;
    if (ano <= 2018) {
        break;
    }
}
var author = "Tolkien";
var edi = "JRR";
var livro = new Livro(Number(this.isbn), title, this.ano, author, edi);
var verificar = livro.getDados();
console.log(verificar);
