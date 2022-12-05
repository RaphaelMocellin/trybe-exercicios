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

console.log(flatten(arrays));