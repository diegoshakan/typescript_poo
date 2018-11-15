"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(n, i, a) {
        this.nome = n;
        this.idade = i;
        this.altura = a;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Animal.prototype.getIdade = function () {
        return this.idade;
    };
    Animal.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Animal.prototype.getAltura = function () {
        return this.altura;
    };
    Animal.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    return Animal;
}());
exports.Animal = Animal;
