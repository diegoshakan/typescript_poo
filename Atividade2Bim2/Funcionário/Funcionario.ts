import { Escolaridade } from "./Escolaridade";
import { Hierarquia } from "./Hierarquia"

export class Funcionario{
    protected nome: string;
    protected matricula: number;
    protected escolaridade: Escolaridade;
    protected remuneracaoBase: number;
    protected remuneracaoTotal: number;
    protected cargo: Hierarquia;
    protected bonus: number;

    constructor(n: string, m: number, esc: Escolaridade, cargo: Hierarquia){
        this.nome = n;
        this.matricula = m;
        this.escolaridade = esc;
        this.remuneracaoBase = 1000.00;
        this.remuneracaoTotal = 1000.00;
        this.cargo = cargo;
        this.bonus = 0;
        
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getMatricula(): number{
        return this.matricula;
    }

    public setMatricula(matricula: number){
        this.matricula = matricula;
    }

    public getEscolaridade(): Escolaridade{
        return this.escolaridade;
    }

    public setEscolaridade(escolaridade: string){
        this.escolaridade = escolaridade;
    }

    public getCargo(): Hierarquia{
        return this.cargo;
    }

    public setCargo(cargo: Hierarquia){
        this.cargo = cargo;
    }

    public getBonus(): number{
        return this.bonus;
    }

    public setBonus(bonus: number){
        this.bonus = bonus;
    }

    public getRemuneracaoBase(): number{
        return this.remuneracaoBase;
    }

    public getRemuneracaoTotal(): number{
        return this.remuneracaoTotal + this.bonus;
    }
   

    public calcularRemuneracaoTotal(){
        switch (this.escolaridade) {
            case Escolaridade.escolaridade2:
                 this.remuneracaoTotal = this.remuneracaoBase * 1.05;
                break;
            case Escolaridade.escolaridade3:
                this.remuneracaoTotal = this.remuneracaoBase * 1.1;
                break;
            case Escolaridade.escolaridade4:
                this.remuneracaoTotal = this.remuneracaoBase * 1.2;
                break;
            case Escolaridade.escolaridade5:
                this.remuneracaoTotal = this.remuneracaoBase * 1.25;
                break;
            case Escolaridade.escolaridade6:
                this.remuneracaoTotal = this.remuneracaoBase * 1.35;
                break;
            case Escolaridade.escolaridade7:
                this.remuneracaoTotal = this.remuneracaoBase * 1.4;
                break;
            default:
                this.remuneracaoTotal = this.remuneracaoBase;
                break;
        }

    }

    public calcularCargo(){
        switch (this.cargo) {
            case Hierarquia.vendedor:
                 this.bonus += 300;
                break;
            case Hierarquia.supervisor:
                this.bonus += 600;
                break;
            case Hierarquia.gerente:
                this.bonus += 1500;
                break;
            default:
                this.bonus = this.remuneracaoBase;
                break;
        }
    }

    public getInfo(){
        return `Nome: ${this.nome} Matrícula: ${this.matricula} Escolaridade: ${this.escolaridade} Remuneração Base: R$ ${this.remuneracaoBase} 
      Remuneração Total: R$ ${this.remuneracaoTotal}`;
    }

}