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

let arrayTeste = [2, 3, 6, 7, 10, 0, -3];

function smallestInArray(array) {
    let smallest;
    for (let i = 0; i < array.length; i += 1) {
        for (let i2 = 0; i2 < array.length; i2 += 1) {
            if (array[i] < array[i2]){
                smallest = array[i];
            }
        }
    }
    return console.log(array.indexOf(smallest));
}

smallestInArray(arrayTeste);