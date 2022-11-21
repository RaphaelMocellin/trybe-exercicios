function hydrate(phrase) {
    let extractedNumbers = phrase.match(/\d+/g);
    let sum = 0;
    for (let number of extractedNumbers) {
      sum += parseInt(number);
    }
    if (sum > 1) {
      return `${sum} copos de água`;
    }
    return `${sum} copo de água`;
  }

module.exports = hydrate;