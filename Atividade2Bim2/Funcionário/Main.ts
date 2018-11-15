import { Escolaridade } from "./Escolaridade";
import { Funcionario } from "./Funcionario";
import { Empresa } from "./Empresa";
import { Hierarquia } from "./Hierarquia";


let funcionario1: Funcionario = new Funcionario('Diego Araujo', 111, Escolaridade.escolaridade2, Hierarquia.gerente);
let funcionario2: Funcionario = new Funcionario('José Everson', 222, Escolaridade.escolaridade2, Hierarquia.supervisor);
let funcionario3: Funcionario = new Funcionario('Lukas Pol', 333, Escolaridade.escolaridade3, Hierarquia.supervisor);
let funcionario4: Funcionario = new Funcionario('José Maria', 444, Escolaridade.escolaridade3, Hierarquia.vendedor);
let funcionario5: Funcionario = new Funcionario('Mateus Eider', 555, Escolaridade.escolaridade3, Hierarquia.vendedor);
let funcionario6: Funcionario = new Funcionario('Josenildo', 777, Escolaridade.escolaridade4, Hierarquia.vendedor);
let funcionario7: Funcionario = new Funcionario('Arthur', 888, Escolaridade.escolaridade4, Hierarquia.vendedor);
let funcionario8: Funcionario = new Funcionario('Bruno', 999, Escolaridade.escolaridade4, Hierarquia.vendedor);
let funcionario9: Funcionario = new Funcionario('Valério', 1011, Escolaridade.escolaridade6, Hierarquia.vendedor);
let funcionario10: Funcionario = new Funcionario('Danilo', 1022, Escolaridade.escolaridade7, Hierarquia.vendedor);
let funcionarios: Empresa = new Empresa([funcionario1, funcionario2, funcionario3, funcionario4, 
funcionario5, funcionario6, funcionario7, funcionario8, funcionario9, funcionario10]);


// console.log(`Funcionário 1`)
// funcionario1.calcularRemuneracaoTotal()
// console.log(funcionario1.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 2`)
// funcionario2.calcularRemuneracaoTotal()
// console.log(funcionario2.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 3`)
// funcionario3.calcularRemuneracaoTotal()
// console.log(funcionario3.getInfo())
// console.log('----------------------------')
// console.log(`Funcionário 4`)
// funcionario4.calcularRemuneracaoTotal()
// console.log(funcionario4.getInfo())

funcionarios.calculaBonus()
funcionarios.calculaCustoTotal()
funcionarios.calculaCustoEscolaridade()
funcionarios.listaFuncionarios()
console.log(funcionarios.getCustototal())
console.log(funcionarios.getCustototalEscolaridade())