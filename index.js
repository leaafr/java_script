import entradaDados from 'readline-sync';

let nome = entradaDados.question("informe seu nome: ")
console.log(`Olá, ${nome}!`);

let x = entradaDados.questionInt("x: ")
let y = entradaDados.questionInt('y: ')
let total = x + y;
console.log(`Total: ${total}`);
