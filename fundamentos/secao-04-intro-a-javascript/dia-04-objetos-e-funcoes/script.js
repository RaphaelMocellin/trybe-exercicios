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

// for (let key in info) {
//     console.log(info[key]);
// }

// Exercício 5 - Definir um segundo obj e imprimir as chaves dos 2 objs juntos

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {
    if (info[key] === info2[key]){
        console.log('Ambos Recorrentes');
    } else {
        console.log(info[key] + " e " + info2[key])
    }
};