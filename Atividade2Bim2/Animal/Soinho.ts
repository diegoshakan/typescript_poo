import { Animal } from "./Animal";

export class Soinho extends Animal{


    public constructor(n: string, i: number, a: number){
        super(n, i, a)
    }

    public subirNaArvore(altura: number){
        console.log(`O ${this.getNome()} subiu ${altura} m na árvore`);
    }

    public descerDaArvore(){
        console.log(`O ${this.getNome()} desceu da árvore`);
    }

    public mover(x: number){
        console.log(`O ${this.getNome()} andou ${x} metros`);
    }

}