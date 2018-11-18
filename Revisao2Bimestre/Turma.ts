import { Professor } from "./Professor";
import { Aluno } from "./Aluno";

export class Turma{
    private professor: Professor;
    private alunos: Aluno[];
    private turma: string;

    constructor(prof: Professor, alunos: Aluno[], turma: string){
        this.professor = prof;
        this.alunos = alunos;
        this.turma = turma;
    }

    public getProfessor(): Professor{
        return this.professor;
    }

    public setProfessor(professor: Professor){
        this.professor = professor;
    }

    public getAlunos(): Aluno[]{
        return this.alunos;
    }

    public setAlunos(aluno: Aluno[]){
        this.alunos = aluno;
    }

    public getTurma(): string{
        return this.turma;
    }

    public setTurma(turma: string){
        this.turma = turma;
    }
}