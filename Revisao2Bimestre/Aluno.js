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
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(n, end, mat, ano) {
        var _this = _super.call(this, n, end) || this;
        _this.matricula = mat;
        _this.ano = ano;
        return _this;
    }
    Aluno.prototype.getMatricula = function () {
        return this.matricula;
    };
    Aluno.prototype.setMatricula = function (mat) {
        this.matricula = mat;
    };
    Aluno.prototype.getAno = function () {
        return this.ano;
    };
    Aluno.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    return Aluno;
}(Pessoa_1.Pessoa));
exports.Aluno = Aluno;
