const {info, printMessage} = require('./printMessage');

describe('Testes da função print message', () => {
    test('verificando se há a propriedade personagem no obj', () => {
        expect(info).toHaveProperty('personagem');
    })
})