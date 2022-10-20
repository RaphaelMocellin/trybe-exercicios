let salarioBruto = 6000;
let salarioBase;
let inss;
let ir;

if (salarioBruto <= 0) {
    console.log('Salário Inválido');
}
else if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    inss = salarioBruto * 8 / 100;
    salarioBase = salarioBruto - inss;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 9 / 100;
    salarioBase = salarioBruto - inss;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 11 / 100;
    salarioBase = salarioBruto - inss;
}
else {
    inss = 570.88
    salarioBase = salarioBruto - inss;
}

console.log('Seu salário base é: ' + salarioBase);

if (salarioBase <= 0) {
    ir = 0;
}
else if (salarioBase > 0 && salarioBase <= 1903.98) {
    ir = 0;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    ir = (salarioBase * 7.5 / 100) - 142.80;
}
else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
    ir = (salarioBase * 15 / 100) - 354.80;
}
else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
    ir = (salarioBase * 22.5 / 100) - 636.13;
}
else {
    ir = (salarioBase * 27.5 / 100) - 869.36;
}

console.log('O IR cáculado foi: ' + ir)
console.log('Seu salário líquido é: ' + (salarioBase - ir));
