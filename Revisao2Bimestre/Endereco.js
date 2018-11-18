"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(r, n, b, c) {
        this.rua = r;
        this.numero = n;
        this.bairro = b;
        this.cidade = c;
    }
    Endereco.prototype.getRua = function () {
        return this.rua;
    };
    Endereco.prototype.setRua = function (rua) {
        this.rua = rua;
    };
    Endereco.prototype.getNumero = function () {
        return this.numero;
    };
    Endereco.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Endereco.prototype.getBairro = function () {
        return this.bairro;
    };
    Endereco.prototype.setBairro = function (bairro) {
        this.bairro = bairro;
    };
    Endereco.prototype.getCidade = function () {
        return this.cidade;
    };
    Endereco.prototype.setCidade = function (cidade) {
        this.cidade = cidade;
    };
    return Endereco;
}());
exports.Endereco = Endereco;
