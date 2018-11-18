export class Endereco{
    private rua: string;
    private numero: number;
    private bairro: string
    private cidade: string;

    constructor(r: string, n: number, b: string, c: string){
        this.rua = r;
        this.numero = n;
        this.bairro = b;
        this.cidade = c;
    }

    public getRua(): string{
        return this.rua;
    }

    public setRua(rua: string){
        this.rua = rua;
    }

    public getNumero(): number{
        return this.numero;
    }

    public setNumero(numero: number){
        this.numero = numero;
    }

    public getBairro(): string{
        return this.bairro;
    }

    public setBairro(bairro: string){
        this.bairro = bairro;
    }

    public getCidade(): string{
        return this.cidade;
    }

    public setCidade(cidade: string){
        this.cidade = cidade;
    }
}