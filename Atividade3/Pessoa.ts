class Pessoa{
    nome: String;
    idade: number;
    telefone: String;
    parado: boolean;
    correndo: number;

    constructor(){
        this.nome = "Seu Nome";
        this.idade = 0;
        this.telefone = "Seu Telefone";
        this.parado = true;
        this.correndo = 0;
    }

    correr(){
        if(this.parado == true){
            this.parado = false;
            this.correndo++;
        }
    }

    parar(){
        if(this.correndo > 0){
            this.correndo = 0;
            this.parado = true;

        }
    }

}

let diego = new Pessoa();
diego.nome = "Diego Silva";
diego.idade = 33;
diego.telefone = "88907258"

diego.correr();
diego.correr();
diego.correr();

console.log(diego);
diego.parar();
console.log(diego);
