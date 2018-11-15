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
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(nome, idade, altura) {
        return _super.call(this, nome, idade, altura) || this;
    }
    Cavalo.prototype.subirNaArvore = function (altura) {
        console.log("O " + this.getNome() + " N\u00E3o \u00E9 um macaco");
    };
    Cavalo.prototype.descerDaArvore = function () {
        console.log("O " + this.getNome() + " j\u00E1 est\u00E1 no ch\u00E3o");
    };
    Cavalo.prototype.mover = function (x) {
        console.log("O " + this.getNome() + " andou " + x + " metros");
    };
    return Cavalo;
}(Animal_1.Animal));
exports.Cavalo = Cavalo;
