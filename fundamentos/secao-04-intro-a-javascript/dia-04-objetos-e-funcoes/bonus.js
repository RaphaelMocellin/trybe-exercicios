// Exercício 2 - Adicionar os pares a outro Array

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {

    let pares = [];

    for (let element of vector) {
        for (let number of element) {
            if (number % 2 === 0) {
                pares.push(number);
            }
        }
    }

    return console.log(pares);
}

arrayOfNumbers(vector);
