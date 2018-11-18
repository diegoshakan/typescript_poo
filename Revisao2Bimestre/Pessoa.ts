import { Endereco } from "./Endereco";

export abstract class Pessoa{
    protected nome: string;
    protected endereco: Endereco;
    
    constructor(n: string, end: Endereco){
        this.nome = n;
        this.endereco = end;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getEndereco(): Endereco{
        return this.endereco;
    }

    public setEndereco(endereco: Endereco){
        this.endereco = endereco;
    }
}