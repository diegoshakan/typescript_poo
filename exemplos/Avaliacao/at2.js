"use strict";
exports.__esModule = true;
var tv1 = ['Lg', 'x33', 40, 1000];
var tv2 = ['Sony', 's55', 39, 1000];
var tv3 = ['Samsung', 'S44', 60, 3000];
console.log("TV 1 = " + tv1);
console.log("TV 2 = " + tv2);
console.log("TV 3 = " + tv3);
var TV = /** @class */ (function () {
    function TV() {
        this.marca = "NomeMarca";
        this.modelo = "NomeModelo";
        this.tela = 0;
        this.preco = 0;
    }
    return TV;
}());
exports.TV = TV;
var tev1 = new TV();
tev1.marca = 'Sony';
tev1.modelo = 'S55';
tev1.tela = 40;
tev1.preco = 2000;
console.log(tev1);
