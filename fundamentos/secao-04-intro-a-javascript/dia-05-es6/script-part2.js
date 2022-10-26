// Exercícios parte 2

// Exercício 1 - Crie uma função que ligue e desligue um motor de um carro.

let statusMotor = "ligado";

const ligarDesligarMotor = () => (statusMotor === "ligado" ? statusMotor = "Desligado" : statusMotor = "ligado");


ligarDesligarMotor();
console.log(`O motor está ${statusMotor}`);

ligarDesligarMotor();
console.log(`O motor está ${statusMotor}`);

ligarDesligarMotor();
console.log(`O motor está ${statusMotor}`);

ligarDesligarMotor();
console.log(`O motor está ${statusMotor}`);