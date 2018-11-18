import { Endereco } from "./Endereco";
import { Professor } from "./Professor";
import { Aluno } from "./Aluno";
import { Turma } from "./Turma";
import { Disciplinas } from "./Disciplinas";
import { Escola } from "./Escola";

let enderecoProf1: Endereco = new Endereco('Rua da Paz', 15, 'Nova Olinda', 'Olinda-PE')
let professor1: Professor = new Professor('Diego Araujo', enderecoProf1, 20182222, Disciplinas.programacao, ['Manhã', 'Tarde']);

let enderecoAluno1: Endereco = new Endereco('Rua das Oliveiras', 195, 'Nova Olinda', 'Olinda-PE');
let aluno1: Aluno = new Aluno('Abner Araujo', enderecoAluno1, 123, 9);

let enderecoAluno2: Endereco = new Endereco('Rua das Oliveiras', 195, 'Nova Olinda', 'Olinda-PE');
let aluno2: Aluno = new Aluno('Aimée Araujo', enderecoAluno1, 454, 9);

let enderecoProf2: Endereco = new Endereco('Rua das Cantoras', 223, 'Nova Olinda', 'Olinda-PE')
let professor2: Professor = new Professor('Kassandra Araujo', enderecoProf2, 2018213, Disciplinas.historia, ['Manhã', 'Noite']);

let enderecoAluno3: Endereco = new Endereco('Rua da Noite', 23, 'Nova Olinda', 'Olinda-PE');
let aluno3: Aluno = new Aluno('Vitor Araujo', enderecoAluno3, 333, 9);

let enderecoAluno4: Endereco = new Endereco('Rua da Noite', 23, 'Nova Olinda', 'Olinda-PE');
let aluno4: Aluno = new Aluno('Mabelly Araujo', enderecoAluno4, 23, 9);

let turma1: Turma = new Turma(professor1,[aluno1, aluno2], 'A');
let turma2: Turma = new Turma(professor2, [aluno3, aluno4], 'A');

let escola: Escola = new Escola([turma1, turma2]);

console.log(escola.getInfoTurmas());



