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

const circleArea = (raio) => {
    let area = 0;
    const pi = 3.14;

    area = pi * raio ** 2;

    return console.log(`Essa é a área do círculo: ${area}`);
}

circleArea(3);
circleArea(5);