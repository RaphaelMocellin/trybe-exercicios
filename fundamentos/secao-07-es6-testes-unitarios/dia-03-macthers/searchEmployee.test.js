const {professionalBoard, searchEmployee} = require('./searchEmployee');

describe('Testando possibilidades da função searchEmployee', () => {
    test('Testando se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    })
    test('Testando os parametros recebibos', () => {
        expect(() => {searchEmployee()}).toThrow('Insira os dois parâmetros para continuar');
    })
    test('Testando o type dos parametros', () => {
        expect(() => {searchEmployee(true, 'firstName')}).toThrow('ID não é string');
        expect(() => {searchEmployee('8579-6', true)}).toThrow('Detail não é string');
    })
});
describe('Testando os retornos possiveis da função', () => {
    test('Testando se o id foi encontrado no Array', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe(professionalBoard[0].firstName);
        expect(() => {searchEmployee('8579-6', 'SurName')}).toThrow('Detalhe indisponível');
        expect(() => {searchEmployee('666', 'firstName')}).toThrow('ID não identificada');
    })
});
