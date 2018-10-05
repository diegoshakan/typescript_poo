class Aluno{
    nome: string;
    mat: string;
    curso: string;

    constructor(){
        this.nome = 'NomeAluno';
        this.mat = 'xxxxxx';
        this.curso = 'SeuCurso';
    }

    mudarMatricula(mat){
        return this.mat = mat;
    }

}

let aimee = new Aluno();
aimee.nome = 'Aimée';
aimee.mat = '444.444';
aimee.curso = 'Medicina';

console.log(aimee);
aimee.mudarMatricula('333.333');
console.log(aimee);






