export class Personagem{
    nome: string;
    life: number;
    x: number; 
    y: number; 

    constructor(name: string){
        this.nome = name;
        this.life = 5;
        this.x = 0;
        this.y = 0;
        
    }
    
    mover(direcao:string){
        if (direcao === 'direita')
            this.y += 1;
        else if (direcao === 'esquerda')
            this.y -= 1;
        else if (direcao === 'frente')
            this.x += 1;
        else if (direcao === 'tras')
            this.x -= 1;
    }

    verPosicao(){
        return (`Posição X: ${this.x}   Posição Y: ${this.y}`)
    }

    dano(ataque){
        this.life -= ataque;
        if (this.life == 0){
            return 'Fim de jogo!'
        }
    }

    conferirVida(){
        if(this.life == 0){
            return 'Você morreu!'
        } else{
        return this.life;}
    }

}

let nome: string = 'Birl';
let p1 = new Personagem(nome);

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