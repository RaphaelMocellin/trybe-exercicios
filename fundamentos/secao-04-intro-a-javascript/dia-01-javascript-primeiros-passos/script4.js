const currentHour = 2;
let message = "";

if (currentHour >= 22) {
  message = "Não deveriamos comer nada, é hora de dormir";
} 
else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar!";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pra café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!';
}
else if (currentHour >= 4 && currentHour < 11) {
    message = 'Humm, cheiro de café recém-passado';
}
else {
    message = 'você deveria estar dormindo!'
}

console.log(message);
