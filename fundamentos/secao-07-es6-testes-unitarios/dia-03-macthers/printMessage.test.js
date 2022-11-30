const {info, printMessage} = require('./printMessage');

describe('Testes da função print message', () => {
    test('verificando se há a propriedade personagem no obj', () => {
        expect(info).toHaveProperty('personagem');
    })
    test('veriricando resposta da função', () => {
        expect(printMessage(info)).toMatch('Boas vindas');
        expect(printMessage(info)).toMatch(info.personagem);
    })
    test('verificando se a função lança erros', () => {
        expect(() => { printMessage() }).toThrow();
    })
    test('verificando se a função lança erros', () => {
        const testObj = { origem: 'pato donald', nota: 'função'};
        expect(() => { printMessage(testObj) }).toThrow('objeto inválido');
    })
})