class Bike{
    modelo: String;
    cor: String;
    vel: number;
    catraca: number;
    coroa: number;

    constructor(){
        this.modelo = "Modelo da Bicicleta";
        this.cor = "Qual a Cor";
        this.vel = 0.0;
        this.catraca = 1;
        this.coroa = 1;
    }

    pedalar(acelerar){
        if (this.vel == 0.0){
            this.vel =+ acelerar;
        } 
    }

    frear(){
        if (this.vel > 0.0){
            this.vel = 0.0
        }
    }
    
    verVelocidade():number{
        return this.vel
    }

    /*mudarMarcha(){
        Não consegui fazer
    }*/
}

let b1 = new Bike();

b1.pedalar(20);
console.log(b1.verVelocidade());
b1.frear();
console.log(b1.vel);