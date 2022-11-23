const sum = require('./sum');

describe('Testando as possibilidades da função sum', () => {
    test('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4,5)).toBe(9);
    })
    test('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0,0)).toBe(0);
    })
    test('Teste se a função lança um erro quando os parâmetros são number 4 e string "5"', () => {
        expect(() => {sum(4,'5')}).toThrow();
    })
    test('Teste se a função lança um erro coma mensagem certa', () => {
        expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
    })
})