"use strict";
/*2. Crie classes Autor e Editora. Um autor deve possuir nome, data de nasci mento, cpf e
endereço. Uma Editora deve possuir nome, cnpj, endereço e um telefone. Os atributos dessas
classes devem ser todos privados, desse modo crie os métodos necessários para inserir e obter
as informações de autores e editoras.*/
exports.__esModule = true;
var Autor = /** @class */ (function () {
    function Autor(a, n, c, e) {
        this.autor = a;
        this.nasc = n;
        this.cpf = c;
        this.endereço = e;
    }
    Autor.prototype.inserirAutor = function (a, n, c, e) {
        this.autor = a;
        this.nasc = n;
        this.cpf = c;
        this.endereço = e;
    };
    Autor.prototype.obterAutor = function () {
        return this.autor + ' ' + this.nasc + ' ' + this.cpf + ' ' + this.endereço;
    };
    return Autor;
}());
exports.Autor = Autor;
var Editora = /** @class */ (function () {
    function Editora(n, c, e, t) {
        this.nome = n;
        this.cnpj = c;
        this.endereco = e;
        this.telefone = t;
    }
    Editora.prototype.inserirEditora = function (n, c, e, t) {
        this.nome = n;
        this.cnpj = c;
        this.endereco = e;
        this.telefone = t;
    };
    Editora.prototype.obterEditora = function () {
        return this.nome + ' ' + this.cnpj + ' ' + this.endereco + ' ' + this.telefone;
    };
    return Editora;
}());
exports.Editora = Editora;
var diego = new Autor("Diego", "29/05/1985", '089.999.876-00', 'Rua da Amizade');
var abril = new Editora('Abril', '098', 'rua dos santos', '555-5555');
var autor1 = diego.obterAutor();
var editora1 = abril.obterEditora();
console.log(autor1);
console.log(editora1);
