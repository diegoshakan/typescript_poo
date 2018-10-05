var Aluno = /** @class */ (function () {
    function Aluno() {
        this.nome = 'NomeAluno';
        this.mat = 'xxxxxx';
        this.curso = 'SeuCurso';
    }
    Aluno.prototype.mudarMatricula = function (mat) {
        return this.mat = mat;
    };
    return Aluno;
}());
var aimee = new Aluno();
aimee.nome = 'Aimée';
aimee.mat = '444.444';
aimee.curso = 'Medicina';
console.log(aimee);
aimee.mudarMatricula('333.333');
console.log(aimee);
