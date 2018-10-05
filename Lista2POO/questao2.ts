/*2. Crie classes Autor e Editora. Um autor deve possuir nome, data de nasci mento, cpf e
endereço. Uma Editora deve possuir nome, cnpj, endereço e um telefone. Os atributos dessas
classes devem ser todos privados, desse modo crie os métodos necessários para inserir e obter
as informações de autores e editoras.*/

export class Autor{
    private autor: string;
    private nasc: string;
    private cpf: string;
    private endereço: string;

    constructor(a: string, n: string, c: string, e: string){
        this.autor = a;
        this.nasc = n;
        this.cpf = c;
        this.endereço = e;
    }
    
    inserirAutor(a, n, c, e): void{
        this.autor = a;
        this.nasc = n;
        this.cpf = c;
        this.endereço = e;
    }

    obterAutor(){
        return this.autor + ' ' + this.nasc + ' ' + this.cpf + ' ' + this.endereço;
    }
}

export class Editora {
    private nome: string;
    private cnpj: string;
    private endereco: string;
    private telefone: string;

    constructor(n: string, c: string, e: string, t: string){
        this.nome = n;
        this.cnpj = c;
        this.endereco = e;
        this.telefone = t;
    }
    
    inserirEditora(n, c, e, t): void{
        this.nome = n;
        this.cnpj = c;
        this.endereco = e;
        this.telefone = t;
    }

    obterEditora(){
        return this.nome + ' ' +  this.cnpj + ' ' + this.endereco + ' ' + this.telefone;
    }
}

let diego = new Autor("Diego", "29/05/1985", '089.999.876-00', 'Rua da Amizade');
let abril = new Editora('Abril', '098', 'rua dos santos', '555-5555');

let autor1 = diego.obterAutor();
let editora1 = abril.obterEditora();

console.log(autor1);
console.log(editora1);