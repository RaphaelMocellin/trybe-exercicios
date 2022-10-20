let statusCandidato = "teste";

switch (statusCandidato) {
  case "aprovado":
    console.log("Parabens, você foi aprovado");
    break;

  case "lista":
    console.log("Você esta na nossa lista de espera!");
    break;

  case "reprovado":
    console.log("Você foi reprovado");
    break;

  default:
    console.log("Informação incorreta!");
}
