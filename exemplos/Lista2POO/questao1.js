"use strict";
/*1. Escreva uma classe Computador para ser utilizada por um programa de vendas de
computadores. Nesse caso, sua classe deve encapsular os valores dos componentes do
microcomputador, a saber, Processador, RAM, HD e tamanho da tela. Essa classe deve
ter um método calcularPreço que calcule o preço do computador como sendo a soma do
custo de seus componentes:
Placa-mãe: R$800
Opções de processadores: i3 (R$ 400,00), i5 (R$ 600,00) e i7 (R$ 800,00)
Opções de memória: 2 GB (R$ 200,00), 4GB (R$ 350,00) e 8GB (R$ 650,00).
Opções de disco rígido: 500 GB (270,00) e 1 TB (R$ 500).
Opções de monitor: 15 polegadas (R$ 320,00) e 17 polegadas (R$ 520).*/
exports.__esModule = true;
var Computador = /** @class */ (function () {
    function Computador() {
        this.placa = 800.00;
        this.i3 = 400.00;
        this.i5 = 600.00;
        this.i7 = 800.00;
        this.mem2 = 200.00;
        this.mem4 = 350.00;
        this.mem8 = 650.00;
        this.hd500 = 270.00;
        this.hd1tb = 500.00;
        this.monitor15 = 320.00;
        this.monitor17 = 520.00;
    }
    Computador.prototype.calcularPreco = function (placa, proc, mem, hd, mon) {
        return placa + proc + mem + hd + mon;
    };
    return Computador;
}());
exports.Computador = Computador;
var pc = new Computador();
console.log(pc.calcularPreco(this.placa, this.i3, this.mem2, this.hd1tb, this.monitor17));
