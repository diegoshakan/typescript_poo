class Lampada{
    tipo: String;
    Volts: String;
    acesa: boolean;

    constructor(){
        this.tipo = "Brilhante";
        this.Volts = "40v";
        this.acesa = false;
        
    }

    mudarEstado(){
        if (this.acesa == false){
            this.acesa = true;
            console.log("Acesa")
        } else { this.acesa == true;
            this.acesa = false;
            console.log("Apagada");
        }
    }
}

let l1 = new Lampada();

l1.mudarEstado();
console.log(l1);
l1.mudarEstado();
