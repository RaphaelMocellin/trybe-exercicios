// Exercício 1 - Altere o tipo das variaveis de var para let ou const

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
let pessoa = {
  nome: "Henri",
  idade: 20,
};
pessoa = {
  nome: "Luna",
  idade: 19,
}; // Altere essa estrutura para corrigir o erro.
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

const pessoa2 = {
  nome: "Rapha",
  idade: 34,
};

pessoa2.nome = "Vivi";
pessoa2.idade = 32;

// Altere essa estrutura para corrigir o erro.
console.log("Nome:", pessoa2.nome);
console.log("Idade:", pessoa2.idade);

// Exercício 2 - Transforme a função numeroAleatorio em uma arrow function;

function numeroAleatorio() {
    return Math.random()
  }
  console.log(numeroAleatorio());
