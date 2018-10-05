"use strict";
/*import * as readline from 'readline-sync';*/
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(no, ma, cur) {
        this.nome = no;
        this.mat = ma;
        this.curso = cur;
    }
    Aluno.prototype.mudarMat = function (mat) {
        return this.mat = mat;
    };
    Aluno.prototype.verEstado = function () {
        console.log(this.mat);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
//Classe Turma
var Turma = /** @class */ (function () {
    function Turma(pr) {
        this.professor = pr;
        this.alunos = [];
    }
    Turma.prototype.adicionarAluno = function (al) {
        this.alunos.push(al);
    };
    Turma.prototype.obterAlunos = function () {
        return this.alunos;
    };
    return Turma;
}());
exports.Turma = Turma;
var diego = new Aluno('diego', '4444', 'tsi');
var kessy = new Aluno('kessy', '5555', 'tsi');
var tsi = new Turma('Bruno');
tsi.adicionarAluno(diego);
tsi.adicionarAluno(kessy);
console.log(diego, kessy);
tsi.obterAlunos();
