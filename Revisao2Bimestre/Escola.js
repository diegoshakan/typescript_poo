"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Escola = /** @class */ (function () {
    function Escola(turmas) {
        this.turmas = turmas;
    }
    Escola.prototype.getTurmas = function () {
        return this.turmas;
    };
    Escola.prototype.setTurmas = function (turmas) {
        this.turmas = turmas;
    };
    Escola.prototype.getInfoTurmas = function () {
        for (var index = 0; index < this.turmas.length; index++) {
            var element = this.turmas[index];
            console.log(element);
        }
    };
    return Escola;
}());
exports.Escola = Escola;
