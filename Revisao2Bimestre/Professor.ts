import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";
import { Disciplinas } from "./Disciplinas";

export class Professor extends Pessoa{
    private matricula: number;
    private disciplina: Disciplinas;
    private turnos: string[];

    constructor(n: string, end: Endereco, mat: number, disc: Disciplinas, turno: string[]){
        super(n, end)
        this.matricula = mat;
        this.disciplina = disc;
        this.turnos = turno;
    }

    public getMatricula(): number{
        return this.matricula;
    }

    public setMatricula(mat: number){
        this.matricula = mat;
    }

    public getDisciplina(): Disciplinas{
        return this.disciplina;
    }

    public setDisciplina(disc: Disciplinas){
        this.disciplina = disc;
    }

    public getTurnos(): string[]{
        return this.turnos;
    }

    public setTurnos(turno: string[]){
        this.turnos = turno;
    }
}