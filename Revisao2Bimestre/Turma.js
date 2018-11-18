"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turma = /** @class */ (function () {
    function Turma(prof, alunos, turma) {
        this.professor = prof;
        this.alunos = alunos;
        this.turma = turma;
    }
    Turma.prototype.getProfessor = function () {
        return this.professor;
    };
    Turma.prototype.setProfessor = function (professor) {
        this.professor = professor;
    };
    Turma.prototype.getAlunos = function () {
        return this.alunos;
    };
    Turma.prototype.setAlunos = function (aluno) {
        this.alunos = aluno;
    };
    Turma.prototype.getTurma = function () {
        return this.turma;
    };
    Turma.prototype.setTurma = function (turma) {
        this.turma = turma;
    };
    return Turma;
}());
exports.Turma = Turma;
