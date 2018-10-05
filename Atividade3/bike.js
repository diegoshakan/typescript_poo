var Bike = /** @class */ (function () {
    function Bike() {
        this.modelo = "Modelo da Bicicleta";
        this.cor = "Qual a Cor";
        this.vel = 0.0;
        this.catraca = 1;
        this.coroa = 1;
    }
    Bike.prototype.pedalar = function (acelerar) {
        if (this.vel == 0.0) {
            this.vel = +acelerar;
        }
    };
    Bike.prototype.frear = function () {
        if (this.vel > 0.0) {
            this.vel = 0.0;
        }
    };
    Bike.prototype.verVelocidade = function () {
        return this.vel;
    };
    return Bike;
}());
var b1 = new Bike();
b1.pedalar(20);
console.log(b1.verVelocidade());
b1.frear();
console.log(b1.vel);
