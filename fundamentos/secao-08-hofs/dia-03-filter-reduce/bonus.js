// Exercicio bonus 1
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = (array) => {
    // retorne seu código aqui
    return array.reduce((acc, cur) => {
        acc.push(...cur);
        return acc;
    }, [])
}

flatten(arrays);

// Array para exercicios seguintes
const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Exercício 2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (array) => {
    // retorne seu código aqui
    return array.reduce((acc, cur) => {
        if (acc.length === 0) {
            acc += cur.author.name;
        } else {
            acc += `, ${cur.author.name}`;
        }
        return acc;
    }, '')
}

reduceNames(books);

// Exercício 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;

const averageAge = (array) => {
    // retorne seu código aqui
    const result = array.reduce((acc, cur) => {
        acc.push(cur.releaseYear - cur.author.birthYear);
        return acc;
    }, [])
    return result.reduce((acc, cur) => acc += cur) / result.length;
}

console.log(averageAge(books));
