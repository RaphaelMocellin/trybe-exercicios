let peca = "palhaço";

switch (peca.toLowerCase()) {
  case "peão":
    console.log("Pra frente");
    break;

  case "torre":
    console.log("Em retas apenas");
    break;

  case "cavalo":
    console.log("Movimentos em L");
    break;

  case "bispo":
    console.log("Diagonais");
    break;

  case "rainha":
    console.log("Todos os movimentos");
    break;

  case "rei":
    console.log("Apenas uma casa, qualquer diração");
    break;

  default:
    console.log("Peça inválida");
}
