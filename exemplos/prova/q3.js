"use strict";
exports.__esModule = true;
//3
//classe televisão
var Televisao = /** @class */ (function () {
    function Televisao(ma, vo, ca) {
        this.marca = ma;
        this.volume = vo;
        this.canal = ca;
        this.ligada = false;
    }
    Televisao.prototype.obetrEstadoTv = function () {
        return this.ligada;
    };
    return Televisao;
}());
exports.Televisao = Televisao;
//classe controle remoto
var Controle = /** @class */ (function () {
    function Controle(Televisão) {
    }
    Controle.prototype.ligarTv = function (Televisao) {
        Televisao.ligada = true;
    };
    Controle.prototype.desligarTv = function (Televisao) {
        if (Televisao.ligada === true) {
            Televisao.ligada = false;
        }
    };
    Controle.prototype.aumentaSom = function (Televisao) {
        if (Televisao.volume >= 0) {
            Televisao.volume++;
        }
    };
    Controle.prototype.diminuirSom = function (Televisao) {
        if (Televisao.volume > 0) {
            Televisao.volume--;
        }
    };
    Controle.prototype.aumentaCanal = function (Televisao) {
        if (Televisao.canal >= 0) {
            Televisao.canal++;
        }
    };
    Controle.prototype.diminuirCanal = function (Televisao) {
        if (Televisao.canal > 0) {
            Televisao.canal--;
        }
    };
    Controle.prototype.obterVolume = function (Televisao) {
        return Televisao.volume;
    };
    Controle.prototype.obterCanal = function (Televisao) {
        return Televisao.canal;
    };
    Controle.prototype.trocarCanal = function (Televisao, canalEscolhido) {
        if (Televisao.canal >= 0 && Televisao.canal <= 255) {
            Televisao.canal = Televisao.canal + canalEscolhido;
        }
        else {
            return false;
        }
    };
    Controle.prototype.obterEstado = function (Televisao) {
        return Televisao.ligada;
    };
    return Controle;
}());
exports.Controle = Controle;
var tv = new Televisao('sony', 0, 0);
var control = new Controle(tv);
//Testes que a questão 3 pede: 
//a televisão é iniciada desligada
control.ligarTv(tv);
//o canal e o volume começa em 0:
control.aumentaCanal(tv);
control.aumentaSom(tv);
//apresenta o objeto televisão com o seu estado inicial alterado:
console.log(tv);
//controle troca o canal da tv:
control.trocarCanal(tv, 240);
//apresenta o objeto televisão com o canal alterado mais uma vez:
console.log(tv);
//obtém o volume e o canal do objeto tv após as modificações feitas pelo objeto controle:
console.log("Volume: " + control.obterVolume(tv));
console.log("Canal: " + control.obterCanal(tv));
//obejto controle desliga a televisão:
control.desligarTv(tv);
//método para mostrar se a tv está ligada (false or true):
console.log("Televis\u00E3o ligada: " + control.obterEstado(tv));
