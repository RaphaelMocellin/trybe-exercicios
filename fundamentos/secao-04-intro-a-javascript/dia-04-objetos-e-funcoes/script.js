let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Exercício 1 - Imprima as boas vindas

// console.log('Bem-vinda, ' + info.personagem);

// Exercício 2 - Insira uma nova key e imprima o objeto

info.recorrente = "Sim";

// console.log(info);

// Exercício 3 - Faça um for/in mostrando todas as keys do obj

// for (let key in info) {
//     console.log(key);
// }

// Exercício 4 - Faça um novo for/in agora mostrando os valores das chaves.

for (let key in info) {
    console.log(info[key]);
}