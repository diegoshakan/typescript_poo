class Bicicleta{
    private velocidade:number;
    private coroa: number;
    private catraca: number;

    constructor(){
        this.velocidade = 0.0;
        this.coroa = 1;
        this.catraca = 1;
    }
    pedalar(ace): void {
        if (this.velocidade + ace <= 70){
            this.velocidade += ace;
        }
        else {
            this.velocidade = 70;
        }
    }
    frear():void{
        
    }

    modificarMarcha(frente:number = 1, tras:number = 1): void {
        this.coroa = frente;
        this.catraca = tras;
    }

    obertMarcha(){
        return (`Coroa: ${this.coroa}   Catraca: ${this.catraca}`);
    }

    obterVelocidade(): number {
        return this.velocidade;
    }

}

let bike1 = new Bicicleta();

bike1.pedalar(40);
console.log(`A velocidade da bicicleta é ${bike1.obterVelocidade()}`);
bike1.pedalar(10)
console.log(`A velocidade da bicicleta é ${bike1.obterVelocidade()}`);

let coroa = 2;
let catraca = 5;
bike1.modificarMarcha(coroa,catraca);
console.log(bike1.obertMarcha());
bike1.modificarMarcha(coroa);