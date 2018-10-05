/*3. Crie uma classe Livro, contendo os seguintes atributos (ISBN, título, ano de publicação, autor e
editora).
a) Adicione métodos para modificar e obter (consultar) os valores desses atributos. Esses
métodos devem ser públicos e os atributos privados. Leve em consideração que um
ISBN válido deve possuir 4 dígitos (geralmente possuem 13, mas por simplicidade faça
com 4) e que o ano de publicação do livro deve ser menor ou igual que o ano corrente.
b) Crie um construtor que receba todas as informações necessárias para se criar um
novo livro.*/

export class Livro{
    private isbn: number;
    private titulo: string;
    private pubicacao: number;
    private autor: string;
    private editora: string;

    constructor(isbn, ti, pub, aut, edi){
        this.isbn = isbn;
        this.titulo = ti;
        this.pubicacao = pub;
        this.autor = aut;
        this.editora = edi;
    }

    public modiISBN(i: number){
        this.isbn = i;
    }

    public modiTitulo(t:string){
        this.titulo = t;
    }

    public modiAno(ano:number) {
        this.pubicacao = ano;
    }

    public modiAutor(a:string) {
        this.autor = a;
    }
    
    public modiEdi(e:string) {
        this.editora = e;
    }

    public getISBN(){
        return this.isbn;
    }
    
    public getTitulo(){
        return this.titulo;
    }
    
    public getAno(){
        return this.pubicacao
    }
    
    public getAutor(){
        return this.autor;
    }

    public getEdi(){
        return this.editora;
    }
    
    public getDados(){
        return `ISBN: ${this.isbn},\nTítulo: ${this.titulo},\nAno de publicação: ${this.pubicacao},\nAutor: ${this.autor},\nEditora: ${this.editora}`
    }
    
}

// Teste para saber se o número do ISBN é válido
while (true) {
    let isbn: string = "12345";
    if (isbn.length >= 4) {
        break;
    }
}

let title: string = "O Alienista";

// Teste para saber se o ano é válido, ou seja, menor que 2018, ano atual.
// Poderíamos usar também a função Date para dar uma incrementada nessa parte.
while (true) {
    let ano:number = 1948;
    if(ano <=2018){
        break;}
}

let author: string = "Tolkien";
let edi: string = "JRR";

let livro = new Livro(Number(this.isbn), title, this.ano, author, edi);
let verificar = livro.getDados();

console.log(verificar);