"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Escolaridade_1 = require("./Escolaridade");
var Funcionario_1 = require("./Funcionario");
var Empresa_1 = require("./Empresa");
var Hierarquia_1 = require("./Hierarquia");
var funcionario1 = new Funcionario_1.Funcionario('Diego Araujo', 111, Escolaridade_1.Escolaridade.escolaridade2, Hierarquia_1.Hierarquia.gerente);
var funcionario2 = new Funcionario_1.Funcionario('José Everson', 222, Escolaridade_1.Escolaridade.escolaridade2, Hierarquia_1.Hierarquia.supervisor);
var funcionario3 = new Funcionario_1.Funcionario('Lukas Pol', 333, Escolaridade_1.Escolaridade.escolaridade3, Hierarquia_1.Hierarquia.supervisor);
var funcionario4 = new Funcionario_1.Funcionario('José Maria', 444, Escolaridade_1.Escolaridade.escolaridade3, Hierarquia_1.Hierarquia.vendedor);
var funcionario5 = new Funcionario_1.Funcionario('Mateus Eider', 555, Escolaridade_1.Escolaridade.escolaridade3, Hierarquia_1.Hierarquia.vendedor);
var funcionario6 = new Funcionario_1.Funcionario('Josenildo', 777, Escolaridade_1.Escolaridade.escolaridade4, Hierarquia_1.Hierarquia.vendedor);
var funcionario7 = new Funcionario_1.Funcionario('Arthur', 888, Escolaridade_1.Escolaridade.escolaridade4, Hierarquia_1.Hierarquia.vendedor);
var funcionario8 = new Funcionario_1.Funcionario('Bruno', 999, Escolaridade_1.Escolaridade.escolaridade4, Hierarquia_1.Hierarquia.vendedor);
var funcionario9 = new Funcionario_1.Funcionario('Valério', 1011, Escolaridade_1.Escolaridade.escolaridade6, Hierarquia_1.Hierarquia.vendedor);
var funcionario10 = new Funcionario_1.Funcionario('Danilo', 1022, Escolaridade_1.Escolaridade.escolaridade7, Hierarquia_1.Hierarquia.vendedor);
var funcionarios = new Empresa_1.Empresa([funcionario1, funcionario2, funcionario3, funcionario4,
    funcionario5, funcionario6, funcionario7, funcionario8, funcionario9, funcionario10]);
// console.log(`Funcionário 1`)
// funcionario1.calcularRemuneracaoTotal()
// console.log(funcionario1.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 2`)
// funcionario2.calcularRemuneracaoTotal()
// console.log(funcionario2.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 3`)
// funcionario3.calcularRemuneracaoTotal()
// console.log(funcionario3.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 4`)
// funcionario4.calcularRemuneracaoTotal()
// console.log(funcionario4.getInfo())
funcionarios.calculaBonus();
funcionarios.calculaCustoTotal();
funcionarios.calculaCustoEscolaridade();
funcionarios.listaFuncionarios();
console.log(funcionarios.getCustototal());
console.log(funcionarios.getCustototalEscolaridade());
