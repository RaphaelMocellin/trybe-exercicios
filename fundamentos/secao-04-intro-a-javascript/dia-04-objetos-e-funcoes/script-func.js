// Exercício de funções

// Exercício 1 - verificando palindromos

// function verificaPalindrome(palavra) {
//     let splitPalavra = palavra.split("");
//     let reversePalavra = splitPalavra.reverse();
//     let invertedPalavra = reversePalavra.join("");

//     let isPalindrome;

//     if (palavra === invertedPalavra) {
//         isPalindrome = true;
//     } else {
//         isPalindrome = false;
//     }

//     return console.log(isPalindrome);
// }

// verificaPalindrome("12345");
// verificaPalindrome("arara");
// verificaPalindrome("asa");
// verificaPalindrome("teste");
// verificaPalindrome("Raphael");
// verificaPalindrome("tacocat");

// Exercício 2 - Crie uma função que receba um array de inteiros e retorno o index do maior valor.

// let arrayTeste = [2, 3, 6, 7, 10, 1];

// function biggestInArray(array) {
//     let biggest;
//     for (let i = 0; i < array.length; i += 1) {
//         for (let i2 = 0; i2 < array.length; i2 += 1) {
//             if (array[i] > array[i2]){
//                 biggest = array[i];
//             }
//         }
//     }
//     return console.log(array.indexOf(biggest));
// }

// biggestInArray(arrayTeste);

// Exercício 3 - Crie uma função que receba um array de inteiros e retorno o index do menor valor.

// let arrayTeste = [2, 3, 6, 7, 10, 0, -3];

// function smallestInArray(array) {
//     let smallest;
//     for (let i = 0; i < array.length; i += 1) {
//         for (let i2 = 0; i2 < array.length; i2 += 1) {
//             if (array[i] < array[i2]){
//                 smallest = array[i];
//             }
//         }
//     }
//     return console.log(array.indexOf(smallest));
// }

// smallestInArray(arrayTeste);

// Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function biggestName(array) {

//     let biggest = arrayTest[0];

//     for (let i = 0; i < array.length; i += 1) {
//         for (let i2 = 0; i2 < array.length; i2 += 1) {
//             if (array[i].length > array[i2].length && array[i].length > biggest.length) {
//                 biggest = array[i];
//             }
//         }
//     }

//     return console.log(biggest);
// }

// biggestName(arrayTest);

// Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// let arraytest = [2, 3, 2, 5, 8, 2, 3, 5, 5, 5];

// let biggestCount = 0;
// let currentCount = 0;
// let indexOfBiggest;

// function mostRepeated(array) {
//     for (let number of array) {
//         for (let number2 of array) {
//           if (number === number2) {
//             currentCount = currentCount + 1;
//           }
//         }
//         if (currentCount > biggestCount) {
//           biggestCount = currentCount;
//           indexOfBiggest = number;
//         }
      
//         currentCount = 0;
//       }
// }

// mostRepeated(arraytest);
// console.log(indexOfBiggest);

// Exercício 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumFrom1(number) {
    let currentSum = 0;
    for (let i = 1; i <= number; i += 1) {
        currentSum = currentSum + i;
    }
    console.log(currentSum);
}

sumFrom1(10);