// Nova pessoa contratada
const createEmail = (name) => {
    const username = name.replace(' ', '_');
    return `${username}@trybe.com`;
 }

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(createEmail));

// Sorteador de loteria
const selectedNumber = (choseNumber, sortedNumber) => {
    if (choseNumber === sortedNumber) return 'Parabéns';
    return 'Tente novamente';
}  

const loterry = (betNumber, callback) => {
    const randomNumber = Math.floor(Math.random() * 5);
    const result = callback(betNumber, randomNumber);
    return console.log(result);
}

loterry(1, selectedNumber);