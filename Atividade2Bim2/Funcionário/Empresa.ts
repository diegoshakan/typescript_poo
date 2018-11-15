import { Funcionario } from "./Funcionario"


export class Empresa{
    protected funcionarios: Funcionario[];
    protected custoTotal: number;
    protected custoTotalEscolaridade: number;
    protected bonus: number;
        
    constructor(func: Funcionario[]){
        this.funcionarios = func;
        this.custoTotal = 0;
        this.custoTotalEscolaridade = 0;
        this.bonus = 0;
        
        
    }

    public getFuncionarios(): Funcionario[]{
        return this.funcionarios;
    }

    public getCustototal(): any{
        return `Custo Total da Empresa(sem escolaridade, com bônus): R$ ${this.custoTotal},00`;
    }

    public getCustototalEscolaridade(): any{
        return `Custo Total da Empresa(com escolaridade + bônus): R$ ${this.custoTotalEscolaridade},00`;
    }

    public getBonus(): number{
        return this.bonus;
    }

    public setFuncionarios(funcionario: Funcionario[]){
        this.funcionarios = funcionario;
    }

    public setCustototal(custoTotal: number){
        this.custoTotal = custoTotal;
    }

    public setBonus(bonus: number){
        this.bonus = bonus;
    }

    public adicionaFuncionarios(funcionario: Funcionario){
        this.funcionarios.push(funcionario);
                
    }

    public calculaCustoTotal(){
        let soma = 0;
        for (let index = 0; index < this.funcionarios.length; index++) {
            const element = this.funcionarios[index];
            soma = soma + element.getRemuneracaoTotal()
        }
        this.custoTotal = soma;
    }    

    public calculaCustoEscolaridade(){
        let soma = 0;
        for (let index = 0; index < this.funcionarios.length; index++) {
            const element = this.funcionarios[index];
            element.calcularRemuneracaoTotal()
            soma = soma + element.getRemuneracaoTotal()
        }
        this.custoTotalEscolaridade = soma;
    }

    public calculaBonus(){
        let soma = 0;
        for (let index = 0; index < this.funcionarios.length; index++) {
            const element = this.funcionarios[index];
            element.calcularCargo()
            soma = soma + element.getRemuneracaoTotal()
        }
        this.bonus = soma;
    }
    
    public listaFuncionarios(){
        for (let index = 0; index < this.funcionarios.length; index++) {
            const element = this.funcionarios[index];
            console.log(`Funcionário ${index + 1}`)
            console.log(`Nome: ${element.getNome()}, Matrícula: ${element.getMatricula()}, 
Escolaridade: ${element.getEscolaridade()}, Cargo: ${element.getCargo()},
Salário Base: ${element.getRemuneracaoBase()},00, Salário Total: ${element.getRemuneracaoTotal()},
Bônus: ${element.getBonus()}`);
            console.log(`-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.`)
        }
    }
}