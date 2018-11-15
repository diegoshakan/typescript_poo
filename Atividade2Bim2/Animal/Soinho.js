"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Soinho = /** @class */ (function (_super) {
    __extends(Soinho, _super);
    function Soinho(n, i, a) {
        return _super.call(this, n, i, a) || this;
    }
    Soinho.prototype.subirNaArvore = function (altura) {
        console.log("O " + this.getNome() + " subiu " + altura + " m na \u00E1rvore");
    };
    Soinho.prototype.descerDaArvore = function () {
        console.log("O " + this.getNome() + " desceu da \u00E1rvore");
    };
    Soinho.prototype.mover = function (x) {
        console.log("O " + this.getNome() + " andou " + x + " metros");
    };
    return Soinho;
}(Animal_1.Animal));
exports.Soinho = Soinho;
