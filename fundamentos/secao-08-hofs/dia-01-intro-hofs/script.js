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

// loterry(1, selectedNumber);

//Corretor Automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareArrays = (array1, array2) => {
    let note = 0;
    array1.forEach((element, index) => {
        if(element === array2[index]) {
            note += 1;
        } else if(array2[index] !== 'N.A') {
            note -= 0.5;
        }
    })
    return note;
};

const giveNote = (correct, student, callback)  => {
    const finalNote = callback(correct, student);
    return console.log(finalNote);
};

giveNote(RIGHT_ANSWERS, STUDENT_ANSWERS, compareArrays);