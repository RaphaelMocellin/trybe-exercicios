const {myRemove, myFizzBuzz} = require('./script');

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
})

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
})