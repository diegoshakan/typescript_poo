"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(n, end, mat, disc, turno) {
        var _this = _super.call(this, n, end) || this;
        _this.matricula = mat;
        _this.disciplina = disc;
        _this.turnos = turno;
        return _this;
    }
    Professor.prototype.getMatricula = function () {
        return this.matricula;
    };
    Professor.prototype.setMatricula = function (mat) {
        this.matricula = mat;
    };
    Professor.prototype.getDisciplina = function () {
        return this.disciplina;
    };
    Professor.prototype.setDisciplina = function (disc) {
        this.disciplina = disc;
    };
    Professor.prototype.getTurnos = function () {
        return this.turnos;
    };
    Professor.prototype.setTurnos = function (turno) {
        this.turnos = turno;
    };
    return Professor;
}(Pessoa_1.Pessoa));
exports.Professor = Professor;
