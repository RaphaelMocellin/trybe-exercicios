// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
        name: 'Afghanistan',
        region: 'Asia',
        currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
        capital: 'Kabul',
        population: 40218234,
        area: 652230
    },
    {
        name: 'Åland Islands',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Mariehamn',
        population: 28875,
        area: 1580
    },
    {
        name: 'Albania',
        region: 'Europe',
        currencies: [{ code: 'ALL', name: 'Albanian lek' }],
        capital: 'Tirana',
        population: 2837743,
        area: 28748
    },
    {
        name: 'Algeria',
        region: 'Africa',
        currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
        capital: 'Algiers',
        population: 44700000,
        area: 2381741
    },
    {
        name: 'American Samoa',
        region: 'Oceania',
        currencies: [{ code: 'USD', name: 'United States Dollar' }],
        capital: 'Pago Pago',
        population: 55197,
        area: 199
    },
    {
        name: 'Andorra',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Andorra la Vella',
        population: 77265,
        area: 468
    },
    {
        name: 'Angola',
        region: 'Africa',
        currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
        capital: 'Luanda',
        population: 32866268,
        area: 1246700
    },
    {
        name: 'Anguilla',
        region: 'Americas',
        currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
        capital: 'The Valley',
        population: 13452,
        area: 91
    }
];

// Exercicio 1 - Calcule a quantidade total da população de todos os países
// const expectedResult = 120797034;

const getPopulation = (arr) => {
    // retorne o seu código aqui
    return arr.reduce((acc, cur) => {
        return acc + cur.population;
    }, 0);
}

// console.log(getPopulation(countries));

// Exercicio 2 - Calcule a area total de todos os paises
// const expectedResult = 4311757;

const getTotalArea = (arr) => {
    // retorne seu código aqui
    return arr.reduce((acc, cur) => {
        return acc + cur.area;
    }, 0)
}

// console.log(getTotalArea(countries));

// Exercício 3 - Encontre o país com o maior nome
// const expectedResult = {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
// }

const longestName = (arr) => {
    // retorne seu código aqui
    return arr.reduce((acc, cur) => {
        // console.log(acc);
        // console.log(cur);
        return acc.name.length > cur.name.length ? acc : cur;
    })
}

console.log(longestName(countries));