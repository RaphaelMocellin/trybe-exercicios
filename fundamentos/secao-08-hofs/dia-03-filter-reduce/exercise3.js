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

// Adicione o código do exercício aqui:
// const expectedResult = ['Fundação', 'Duna'];

// const booksByAuthorBirthYear = (birthYear, arr) => {
//     // escreva seu código aqui
//     const filteredYear = arr.filter((element) => element.author.birthYear === birthYear);
//     return filteredYear.map((element) => element.name);
// }
// const result = booksByAuthorBirthYear(1920, books);
// console.log(result);

// Using reduce
const expectedResult = ['Fundação', 'Duna'];

const booksByAuthorBirthYear = (birthYear) => {
    // escreva seu código aqui
    return books.reduce((acc, cur) => {
        if (cur.author.birthYear === birthYear) acc.push(cur.name);
        return acc;
    }, [])

}
const result = booksByAuthorBirthYear(1920);
console.log(result);
