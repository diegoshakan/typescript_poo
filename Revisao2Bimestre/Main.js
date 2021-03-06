"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco_1 = require("./Endereco");
var Professor_1 = require("./Professor");
var Aluno_1 = require("./Aluno");
var Turma_1 = require("./Turma");
var Disciplinas_1 = require("./Disciplinas");
var Escola_1 = require("./Escola");
var enderecoProf1 = new Endereco_1.Endereco('Rua da Paz', 15, 'Nova Olinda', 'Olinda-PE');
var professor1 = new Professor_1.Professor('Diego Araujo', enderecoProf1, 20182222, Disciplinas_1.Disciplinas.programacao, ['Manhã', 'Tarde']);
var enderecoAluno1 = new Endereco_1.Endereco('Rua das Oliveiras', 195, 'Nova Olinda', 'Olinda-PE');
var aluno1 = new Aluno_1.Aluno('Abner Araujo', enderecoAluno1, 123, 9);
var enderecoAluno2 = new Endereco_1.Endereco('Rua das Oliveiras', 195, 'Nova Olinda', 'Olinda-PE');
var aluno2 = new Aluno_1.Aluno('Aimée Araujo', enderecoAluno1, 454, 9);
var enderecoProf2 = new Endereco_1.Endereco('Rua das Cantoras', 223, 'Nova Olinda', 'Olinda-PE');
var professor2 = new Professor_1.Professor('Kassandra Araujo', enderecoProf2, 2018213, Disciplinas_1.Disciplinas.historia, ['Manhã', 'Noite']);
var enderecoAluno3 = new Endereco_1.Endereco('Rua da Noite', 23, 'Nova Olinda', 'Olinda-PE');
var aluno3 = new Aluno_1.Aluno('Vitor Araujo', enderecoAluno3, 333, 9);
var enderecoAluno4 = new Endereco_1.Endereco('Rua da Noite', 23, 'Nova Olinda', 'Olinda-PE');
var aluno4 = new Aluno_1.Aluno('Mabelly Araujo', enderecoAluno4, 23, 9);
var turma1 = new Turma_1.Turma(professor1, [aluno1, aluno2], 'A');
var turma2 = new Turma_1.Turma(professor2, [aluno3, aluno4], 'A');
var escola = new Escola_1.Escola([turma1, turma2]);
console.log(escola.getInfoTurmas());
