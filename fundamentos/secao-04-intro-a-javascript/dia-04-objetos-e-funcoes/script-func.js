// Exercício de funções

// Exercício 1 - verificando palindromos

function verificaPalindrome(palavra) {
    let splitPalavra = palavra.split("");
    let reversePalavra = splitPalavra.reverse();
    let invertedPalavra = reversePalavra.join("");

    let isPalindrome;

    if (palavra === invertedPalavra) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return console.log(isPalindrome);
}

verificaPalindrome("12345");
verificaPalindrome("arara");
verificaPalindrome("asa");
verificaPalindrome("teste");
verificaPalindrome("Raphael");
verificaPalindrome("tacocat");

// Exercício 2 - Crie uma função que receba um array de inteiros e retorno o index do maior valor.