let angulo1 = 100;
let angulo2 = 50;
let angulo3 = 30;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Há valores menores ou iguais a zero')
}