"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(func) {
        this.funcionarios = func;
        this.custoTotal = 0;
        this.custoTotalEscolaridade = 0;
        this.bonus = 0;
    }
    Empresa.prototype.getFuncionarios = function () {
        return this.funcionarios;
    };
    Empresa.prototype.getCustototal = function () {
        return "Custo Total da Empresa(sem escolaridade, com b\u00F4nus): R$ " + this.custoTotal + ",00";
    };
    Empresa.prototype.getCustototalEscolaridade = function () {
        return "Custo Total da Empresa(com escolaridade + b\u00F4nus): R$ " + this.custoTotalEscolaridade + ",00";
    };
    Empresa.prototype.getBonus = function () {
        return this.bonus;
    };
    Empresa.prototype.setFuncionarios = function (funcionario) {
        this.funcionarios = funcionario;
    };
    Empresa.prototype.setCustototal = function (custoTotal) {
        this.custoTotal = custoTotal;
    };
    Empresa.prototype.setBonus = function (bonus) {
        this.bonus = bonus;
    };
    Empresa.prototype.adicionaFuncionarios = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    Empresa.prototype.calculaCustoTotal = function () {
        var soma = 0;
        for (var index = 0; index < this.funcionarios.length; index++) {
            var element = this.funcionarios[index];
            soma = soma + element.getRemuneracaoTotal();
        }
        this.custoTotal = soma;
    };
    Empresa.prototype.calculaCustoEscolaridade = function () {
        var soma = 0;
        for (var index = 0; index < this.funcionarios.length; index++) {
            var element = this.funcionarios[index];
            element.calcularRemuneracaoTotal();
            soma = soma + element.getRemuneracaoTotal();
        }
        this.custoTotalEscolaridade = soma;
    };
    Empresa.prototype.calculaBonus = function () {
        var soma = 0;
        for (var index = 0; index < this.funcionarios.length; index++) {
            var element = this.funcionarios[index];
            element.calcularCargo();
            soma = soma + element.getRemuneracaoTotal();
        }
        this.bonus = soma;
    };
    Empresa.prototype.listaFuncionarios = function () {
        for (var index = 0; index < this.funcionarios.length; index++) {
            var element = this.funcionarios[index];
            console.log("Funcion\u00E1rio " + (index + 1));
            console.log("Nome: " + element.getNome() + ", Matr\u00EDcula: " + element.getMatricula() + ", \nEscolaridade: " + element.getEscolaridade() + ", Cargo: " + element.getCargo() + ",\nSal\u00E1rio Base: " + element.getRemuneracaoBase() + ",00, Sal\u00E1rio Total: " + element.getRemuneracaoTotal() + ",\nB\u00F4nus: " + element.getBonus());
            console.log("-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.");
        }
    };
    return Empresa;
}());
exports.Empresa = Empresa;
