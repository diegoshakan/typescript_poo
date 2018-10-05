"use strict";
exports.__esModule = true;
var Personagem = /** @class */ (function () {
    function Personagem(name) {
        this.nome = name;
        this.life = 5;
        this.x = 0;
        this.y = 0;
    }
    Personagem.prototype.mover = function (direcao) {
        if (direcao === 'direita')
            this.y += 1;
        else if (direcao === 'esquerda')
            this.y -= 1;
        else if (direcao === 'frente')
            this.x += 1;
        else if (direcao === 'tras')
            this.x -= 1;
    };
    Personagem.prototype.verPosicao = function () {
        return ("Posi\u00E7\u00E3o X: " + this.x + "   Posi\u00E7\u00E3o Y: " + this.y);
    };
    Personagem.prototype.dano = function (ataque) {
        this.life -= ataque;
        if (this.life == 0) {
            return 'Fim de jogo!';
        }
    };
    Personagem.prototype.conferirVida = function () {
        if (this.life == 0) {
            return 'Você morreu!';
        }
        else {
            return this.life;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var nome = 'Birl';
var p1 = new Personagem(nome);
p1.mover('direita');
p1.mover('frente');
p1.mover('esquerda');
p1.mover('direita');
p1.mover('tras');
console.log(p1.verPosicao());
p1.mover('esquerda');
console.log(p1.verPosicao());
p1.dano(5);
console.log('Jogador:', p1.nome, 'Seu status de vida:', p1.conferirVida());
