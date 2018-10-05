//3
//classe televisão
export class Televisao{
    private marca: string;
    private volume: number;
    private canal: number;
    private ligada: boolean

    constructor(ma: string, vo: number, ca: number){
        this.marca = ma;
        this.volume = vo;
        this.canal = ca;
        this.ligada = false;
    }
   
    obetrEstadoTv(){
        return this.ligada;
    }
}

//classe controle remoto
export class Controle{
    constructor(Televisão){

    }
    
    ligarTv(Televisao): void{
        Televisao.ligada = true;
    }

    desligarTv(Televisao): void{
        if (Televisao.ligada === true){
            Televisao.ligada = false;
        }
    }

    aumentaSom(Televisao): void{
        if (Televisao.volume >= 0){
            Televisao.volume++;
        }
    }

    diminuirSom(Televisao): void{
        if (Televisao.volume > 0){
            Televisao.volume--;
        }
    }

    aumentaCanal(Televisao): void{
        if (Televisao.canal >= 0){
            Televisao.canal++;
        }
    }

    diminuirCanal(Televisao): void{
        if (Televisao.canal > 0){
            Televisao.canal--;
        }
    }

    obterVolume(Televisao){
        return Televisao.volume;
    }

    obterCanal(Televisao){
        return Televisao.canal;
    }

    trocarCanal(Televisao, canalEscolhido){
        if (Televisao.canal >= 0 && Televisao.canal <= 255){
            Televisao.canal = Televisao.canal + canalEscolhido;
        } else {
            return false;
        }
    }

    obterEstado(Televisao){
        return Televisao.ligada
    }
}

let tv = new Televisao('sony', 0, 0);
let control = new Controle(tv);


//Testes que a questão 3 pede: 
//a televisão é iniciada desligada
control.ligarTv(tv);

//o canal e o volume começa em 0:
control.aumentaCanal(tv);
control.aumentaSom(tv);

//apresenta o objeto televisão com o seu estado inicial alterado:
console.log(tv);

//controle troca o canal da tv:
control.trocarCanal(tv, 240);

//apresenta o objeto televisão com o canal alterado mais uma vez:
console.log(tv);

//obtém o volume e o canal do objeto tv após as modificações feitas pelo objeto controle:
console.log(`Volume: ${control.obterVolume(tv)}`);
console.log(`Canal: ${control.obterCanal(tv)}`);

//obejto controle desliga a televisão:
control.desligarTv(tv);

//método para mostrar se a tv está ligada (false or true):
console.log(`Televisão ligada: ${control.obterEstado(tv)}`);