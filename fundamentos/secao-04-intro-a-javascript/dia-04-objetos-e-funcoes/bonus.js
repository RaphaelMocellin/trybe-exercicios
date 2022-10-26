// Exercício 2 - Adicionar os pares a outro Array

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function arrayOfNumbers(vector) {

//     let pares = [];

//     for (let element of vector) {
//         for (let number of element) {
//             if (number % 2 === 0) {
//                 pares.push(number);
//             }
//         }
//     }

//     return console.log(pares);
// }

// arrayOfNumbers(vector);

// Exercício 3 - Transformar array em obj

    // const basket = [
    //     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    //     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    //     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    //     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    //     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    //     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    //     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    //     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    //     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    //     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    //     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    //     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    //     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    //     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    //     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    //     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    //     'Banana', 'Pera', 'Abacate', 'Uva',
    // ];

    // let basketObj = {};

    // function arrayIntoObj(array) {
    //     for (let item of array) {
    //         if (basketObj[item]) {
    //             basketObj[item] += 1;
    //         } else {
    //             basketObj[item] = 1;
    //         }
    //     }
    // }


    // // Tentando alternativa com flase inves de true
    // //   function arrayIntoObj(array) {
    // //     for (let item of array) {
    // //         if (basketObj[item] === false) {
    // //             basketObj[item] = 1;
    // //         } else {
    // //             basketObj[item] += 1;
    // //         }
    // //     }
    // //   }

    // arrayIntoObj(basket);
    // console.log('Sua cesta possui: ');
    // for (let fruit in basketObj) {
    //     console.log(basketObj[fruit], fruit);
    // }