import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export class Aluno extends Pessoa{
    private matricula: number;
    private ano: number;
    

    constructor(n: string, end: Endereco, mat: number, ano: number){
        super(n, end)
        this.matricula = mat;
        this.ano = ano;
        
    }

    public getMatricula(): number{
        return this.matricula;
    }

    public setMatricula(mat: number){
        this.matricula = mat;
    }

    public getAno(): number{
        return this.ano;
    }

    public setAno(ano: number){
        this.ano = ano;
    }

}