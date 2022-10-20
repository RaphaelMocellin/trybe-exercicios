let a = 35;
let b = 20;
let c = 35;

if (a > b && a > c) {
    console.log(a);
} 
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}
else {
    console.log('Há números iguais!');
}