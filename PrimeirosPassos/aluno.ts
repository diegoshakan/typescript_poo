export class Aluno{
    nome: string;
    mat: string;
    curso: string;

    constructor(no: string, ma: string, cur: string){
        this.nome = no;
        this.mat = ma;
        this.curso = cur;
    }

    mudarMat(mat): string{
        return this.mat = mat;
    }
    
    verEstado(){
        console.log(this.mat);
    }
    
}

//Classe Turma
export class Turma{
    private alunos: Aluno[];
    private professor: string;

    constructor(pr: string){
        this.professor = pr;
        this.alunos = [];
    }

    adicionarAluno(al: Aluno): void{
        this.alunos.push(al);
    }
    obterAlunos(): Aluno[] {
        return this.alunos;
    }
}

let diego = new Aluno('diego', '4444', 'tsi');

let kessy = new Aluno('kessy', '5555', 'tsi');


let tsi = new Turma('Bruno');
tsi.adicionarAluno(diego);
tsi.adicionarAluno(kessy);
console.log(diego, kessy);

tsi.obterAlunos();





