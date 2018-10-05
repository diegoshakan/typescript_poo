var Bicicleta = /** @class */ (function () {
    function Bicicleta() {
        this.velocidade = 0.0;
        this.coroa = 1;
        this.catraca = 1;
    }
    Bicicleta.prototype.pedalar = function (ace) {
        if (this.velocidade + ace <= 70) {
            this.velocidade += ace;
        }
        else {
            this.velocidade = 70;
        }
    };
    Bicicleta.prototype.frear = function () {
    };
    Bicicleta.prototype.modificarMarcha = function (frente, tras) {
        if (frente === void 0) { frente = 1; }
        if (tras === void 0) { tras = 1; }
        this.coroa = frente;
        this.catraca = tras;
    };
    Bicicleta.prototype.obertMarcha = function () {
        return ("Coroa: " + this.coroa + "   Catraca: " + this.catraca);
    };
    Bicicleta.prototype.obterVelocidade = function () {
        return this.velocidade;
    };
    return Bicicleta;
}());
var bike1 = new Bicicleta();
bike1.pedalar(40);
console.log("A velocidade da bicicleta \u00E9 " + bike1.obterVelocidade());
bike1.pedalar(10);
console.log("A velocidade da bicicleta \u00E9 " + bike1.obterVelocidade());
var coroa = 2;
var catraca = 5;
bike1.modificarMarcha(coroa, catraca);
console.log(bike1.obertMarcha());
bike1.modificarMarcha(coroa);
