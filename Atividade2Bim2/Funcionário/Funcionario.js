"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Escolaridade_1 = require("./Escolaridade");
var Hierarquia_1 = require("./Hierarquia");
var Funcionario = /** @class */ (function () {
    function Funcionario(n, m, esc, cargo) {
        this.nome = n;
        this.matricula = m;
        this.escolaridade = esc;
        this.remuneracaoBase = 1000.00;
        this.remuneracaoTotal = 1000.00;
        this.cargo = cargo;
        this.bonus = 0;
    }
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Funcionario.prototype.getMatricula = function () {
        return this.matricula;
    };
    Funcionario.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Funcionario.prototype.getEscolaridade = function () {
        return this.escolaridade;
    };
    Funcionario.prototype.setEscolaridade = function (escolaridade) {
        this.escolaridade = escolaridade;
    };
    Funcionario.prototype.getCargo = function () {
        return this.cargo;
    };
    Funcionario.prototype.setCargo = function (cargo) {
        this.cargo = cargo;
    };
    Funcionario.prototype.getBonus = function () {
        return this.bonus;
    };
    Funcionario.prototype.setBonus = function (bonus) {
        this.bonus = bonus;
    };
    Funcionario.prototype.getRemuneracaoBase = function () {
        return this.remuneracaoBase;
    };
    Funcionario.prototype.getRemuneracaoTotal = function () {
        return this.remuneracaoTotal + this.bonus;
    };
    Funcionario.prototype.calcularRemuneracaoTotal = function () {
        switch (this.escolaridade) {
            case Escolaridade_1.Escolaridade.escolaridade2:
                this.remuneracaoTotal = this.remuneracaoBase * 1.05;
                break;
            case Escolaridade_1.Escolaridade.escolaridade3:
                this.remuneracaoTotal = this.remuneracaoBase * 1.1;
                break;
            case Escolaridade_1.Escolaridade.escolaridade4:
                this.remuneracaoTotal = this.remuneracaoBase * 1.2;
                break;
            case Escolaridade_1.Escolaridade.escolaridade5:
                this.remuneracaoTotal = this.remuneracaoBase * 1.25;
                break;
            case Escolaridade_1.Escolaridade.escolaridade6:
                this.remuneracaoTotal = this.remuneracaoBase * 1.35;
                break;
            case Escolaridade_1.Escolaridade.escolaridade7:
                this.remuneracaoTotal = this.remuneracaoBase * 1.4;
                break;
            default:
                this.remuneracaoTotal = this.remuneracaoBase;
                break;
        }
    };
    Funcionario.prototype.calcularCargo = function () {
        switch (this.cargo) {
            case Hierarquia_1.Hierarquia.vendedor:
                this.bonus += 300;
                break;
            case Hierarquia_1.Hierarquia.supervisor:
                this.bonus += 600;
                break;
            case Hierarquia_1.Hierarquia.gerente:
                this.bonus += 1500;
                break;
            default:
                this.bonus = this.remuneracaoBase;
                break;
        }
    };
    Funcionario.prototype.getInfo = function () {
        return "Nome: " + this.nome + " Matr\u00EDcula: " + this.matricula + " Escolaridade: " + this.escolaridade + " Remunera\u00E7\u00E3o Base: R$ " + this.remuneracaoBase + " \n      Remunera\u00E7\u00E3o Total: R$ " + this.remuneracaoTotal;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
