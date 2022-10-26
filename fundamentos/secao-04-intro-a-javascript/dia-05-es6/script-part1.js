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
