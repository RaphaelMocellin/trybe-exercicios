// Exercício Bonus - Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

const substituaX = (nome) => {
  const frase = "Tryber x aqui!";
  let splitedFrase = frase.split(" ");
  let newPhrase = [];

  for (let word of splitedFrase) {
    if (word === "x") {
      newPhrase.push(nome);
    } else {
      newPhrase.push(word);
    }
  }
  return newPhrase.join(" ");
};

substituaX("Rapha");
