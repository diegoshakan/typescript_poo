var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = "Seu Nome";
        this.idade = 0;
        this.telefone = "Seu Telefone";
        this.parado = true;
        this.correndo = 0;
    }
    Pessoa.prototype.correr = function () {
        if (this.parado == true) {
            this.parado = false;
            this.correndo++;
        }
    };
    Pessoa.prototype.parar = function () {
        if (this.correndo > 0) {
            this.correndo = 0;
            this.parado = true;
        }
    };
    return Pessoa;
}());
var diego = new Pessoa();
diego.nome = "Diego Silva";
diego.idade = 33;
diego.telefone = "88907258";
diego.correr();
diego.correr();
diego.correr();
console.log(diego);
diego.parar();
console.log(diego);
