var Lampada = /** @class */ (function () {
    function Lampada() {
        this.tipo = "Brilhante";
        this.Volts = "40v";
        this.acesa = false;
    }
    Lampada.prototype.mudarEstado = function () {
        if (this.acesa == false) {
            this.acesa = true;
            console.log("Acesa");
        }
        else {
            this.acesa == true;
            this.acesa = false;
            console.log("Apagada");
        }
    };
    return Lampada;
}());
var l1 = new Lampada();
l1.mudarEstado();
console.log(l1);
l1.mudarEstado();
//# sourceMappingURL=Lampada.js.map