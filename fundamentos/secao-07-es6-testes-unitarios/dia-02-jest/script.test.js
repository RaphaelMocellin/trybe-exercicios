const {myRemove, myFizzBuzz, mapString, encode, decode} = require('./script');
const techList = require('./techList.js');
const hydrate = require('./hydrate.js');

describe('Testing myRemove function', () => {
    test('Testing if it removes the right element', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('Testing if it removes the right element', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Testing if it removes the right element', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
});

describe('testing myFizzBuzz function', () => {
    test('Testing if returns fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    test('Testing if returns fizz', () => {
        expect(myFizzBuzz(6)).toBe('fizz');
    });
    test('Testing if returns buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    test('Testing if returns the num', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    test('Testing if returns false', () => {
        expect(myFizzBuzz('bla')).toBe(false);
    });
});

describe('testing mapString, encode and decode functions', () => {
    test('Testing if encode is a function', () => {
        expect(encode).toBeInstanceOf(Function);
    });
    test('Testing if decode is a function', () => {
        expect(decode).toBeInstanceOf(Function);
    });
    test('Testing if encode converts a,e,i,o,u into 1,2,3,4,5', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    test('Testing if decode converts 1,2,3,4,5 into a,e,i,o,u', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    test('Testing if encode converts other consoants', () => {
        expect(encode('qwrty')).not.toContain('12345');
    });
    test('Testing if encode converts other numbers', () => {
        expect(decode('67890')).not.toContain('aeiou');
    });
    test('Testing if both string have the same length (encoding)', () => {
        const testParam = 'testecerto';
        expect(encode(testParam)).toHaveLength(testParam.length);
    });
    test('Testing if both string have the same length (decoding)', () => {
        const testParam = 'testecerto';
        expect(decode(testParam)).toHaveLength(testParam.length);
    });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
