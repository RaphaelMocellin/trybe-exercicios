// Exercícios parte 2

// Exercício 1 - Crie uma função que ligue e desligue um motor de um carro.

// let statusMotor = "ligado";

// const ligarDesligarMotor = () => (statusMotor === "ligado" ? statusMotor = "Desligado" : statusMotor = "ligado");


// ligarDesligarMotor();
// console.log(`O motor está ${statusMotor}`);

// ligarDesligarMotor();
// console.log(`O motor está ${statusMotor}`);

// ligarDesligarMotor();
// console.log(`O motor está ${statusMotor}`);

// ligarDesligarMotor();
// console.log(`O motor está ${statusMotor}`);

// Exercício 2 - Crie uma função que calcule a área de um círculo.

// const circleArea = (raio) => {
//     let area = 0;
//     const pi = 3.14;

//     area = pi * raio ** 2;

//     return console.log(`Essa é a área do círculo: ${area}`);
// }

// circleArea(3);
// circleArea(5);

// Exercício 3 - Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// const longestWord = (phrase) => {
//     let splitedPhrase = phrase.split(" ");
//     let longestCount = 0;
//     let longestWord;

//     for (let word of splitedPhrase) {
//         for (let word2 of splitedPhrase) {
//             if (word.length > word2.length && word.length > longestCount) {
//                 longestCount = word.length;
//                 longestWord = word;
//             }
//         }
//     }

//     console.log(longestWord);
// }

// Exercício 3 - utilizando método array.sort().

const longestWord = (phrase) => {
    let splitedPhrase = phrase.split(" ");
    let sortedPhrase = splitedPhrase.sort(function(a, b){ return b.length - a.length});

    console.log(sortedPhrase[0]);
}


longestWord('apenas um teste');
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
longestWord('apenas um teste para saber qual a maior palavra desta maldita frase');