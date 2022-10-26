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

let joinedNewPhrase = substituaX("Rapha");

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

const minhasSkills = (message) => {
    const skills = ['HTML', 'CSS', 'Git'];

    let finalMessage = `${message}
    Minhas três principais habilidades são:
    -${skills[0]}
    -${skills[1]}
    -${skills[2]}`

    console.log(finalMessage);
}

minhasSkills(joinedNewPhrase);