const custoProduto = 30;
const vendaProduto = 50;

let valorCustoTotal = custoProduto + ((custoProduto * 20) / 100);
let lucro = vendaProduto - valorCustoTotal;

if (custoProduto > 0 && vendaProduto > 0) {
    console.log(lucro * 1000);
}
else {
    console.log('Valores menores ou iguais a 0');
}