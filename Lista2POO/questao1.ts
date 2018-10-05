/*1. Escreva uma classe Computador para ser utilizada por um programa de vendas de
computadores. Nesse caso, sua classe deve encapsular os valores dos componentes do
microcomputador, a saber, Processador, RAM, HD e tamanho da tela. Essa classe deve
ter um método calcularPreço que calcule o preço do computador como sendo a soma do
custo de seus componentes:
Placa-mãe: R$800
Opções de processadores: i3 (R$ 400,00), i5 (R$ 600,00) e i7 (R$ 800,00)
Opções de memória: 2 GB (R$ 200,00), 4GB (R$ 350,00) e 8GB (R$ 650,00).
Opções de disco rígido: 500 GB (270,00) e 1 TB (R$ 500).
Opções de monitor: 15 polegadas (R$ 320,00) e 17 polegadas (R$ 520).*/

export class Comp{
    private placa: number;
    private processador: number;
    private memoria: number;
    private hd: number;
    private monitor: number;
    private listaproc: number[] = [400, 600, 800]
    private listamem: number[] = [200, 350, 650];
    private listahd: number[] = [270, 500];
    private listamon: number[] = [320, 520];

    constructor(pr: number, me: number, hd: number, mon: number){
        this.placa = 800;
        this.processador = this.listaproc[pr];
        this.memoria = this.listamem[me];
        this.hd = this.listahd[hd];
        this.monitor = this.listamon[mon];

    }
    
    obterValor(){
        return this.placa + this.processador + this.memoria + this.hd + this. monitor
    }
}

let pc = new Comp(1,0,1,0);
let total  = pc.obterValor();
console.log(`Seu computador custará R$ ${total},00`);
    
    



