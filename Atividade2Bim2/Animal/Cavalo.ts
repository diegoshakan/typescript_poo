import { Animal } from "./Animal";

export class Cavalo extends Animal{


    public constructor(n: string, i: number, a: number){
        super(n, i, a)
    }

    public subirNaArvore(altura: number){
        console.log(`O ${this.getNome()} Não é um macaco`);
    }

    public descerDaArvore(){
        console.log(`O ${this.getNome()} já está no chão`);
    }

    public mover(x: number){
        console.log(`O ${this.getNome()} andou ${x} metros`);
    }

}