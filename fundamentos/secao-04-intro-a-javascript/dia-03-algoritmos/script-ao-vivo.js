// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X

// let soma = 0;

// for (let i = 1; i <= 50; i += 1) {
//     soma = soma + i;
// }

// console.log("A soma total de 1 a 50 é: " + soma);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let contagem = 0;

// for (let i = 2; i <= 150; i += 1) {
//     if (i % 3 === 0) {
//         contagem = contagem + 1;
//     }
// }

// if (contagem === 50) {
//     console.log("Mensagem secreta!");
// }  else {
//     console.log(contagem);
// }

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let player1 = "pedra";
// let player2 = "papel";

// if (player1 === player2) {
//     console.log("A Ties");
// } else if  (player1 === "pedra" && player2 === "papel") {
//     console.log("Player 2 won");
// } else if  (player1 === "tesoura" && player2 === "papel") {
//     console.log("Player 1 won");
// } else if  (player1 === "tesoura" && player2 === "pedra") {
//     console.log("Player 2 won");
// } else if  (player1 === "papel" && player2 === "pedra") {
//     console.log("Player 1 won");
// }



// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

let age = 10;

// if (age >= 18) {
//     console.log("A pessoa pé maior de idade")
// }

age >= 18 ? console.log("A pessoa é maior de idade") : console.log("menor de idade");

// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let carolzita = 26;
// let murilo = 30;
// let baeta = 35;

