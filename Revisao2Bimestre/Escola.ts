import { Pessoa } from "./Pessoa";
import { Professor } from "./Professor";
import { Endereco } from "./Endereco";
import { Disciplinas } from "./Disciplinas";
import { Aluno } from "./Aluno";
import { Turma } from "./Turma";

export class Escola{
    private turmas: Turma[];

    constructor(turmas: Turma[]){
        this.turmas = turmas;
    }

    public getTurmas(): Turma[]{
        return this.turmas;
    }

    public setTurmas(turmas: Turma[]){
        this.turmas = turmas;
    }

    public getInfoTurmas(): void{
        for (let index = 0; index < this.turmas.length; index++) {
            const element = this.turmas[index];
            console.log(element)
        }
    }
}