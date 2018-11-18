"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(n, end) {
        this.nome = n;
        this.endereco = end;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getEndereco = function () {
        return this.endereco;
    };
    Pessoa.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
