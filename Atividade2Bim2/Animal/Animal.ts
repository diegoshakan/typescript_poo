export abstract class Animal{

    private nome: string;
    private idade: number;
    private altura: number;


    public constructor(n: string, i: number, a: number){
        this.nome = n;
        this.idade = i;
        this.altura = a;
    }


    public abstract subirNaArvore(alt: number): void;

    public abstract descerDaArvore(): void;

    public abstract mover(x: number): void;


    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getIdade(): number{
        return this.idade;
    }

    public setIdade(idade: number): void{
        this.idade = idade;
    }

    public getAltura(): number{
        return this.altura;
    }

    public setAltura(altura: number): void{
        this.altura = altura;
    }

    
}