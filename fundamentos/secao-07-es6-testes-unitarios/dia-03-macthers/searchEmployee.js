// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
    if (!id || !detail) throw new Error ('Insira os dois parâmetros para continuar');
    if (typeof id !== 'string') throw new Error ('ID não é string');
    if (typeof detail !== 'string') throw new Error ('Detail não é string');
    if (professionalBoard[0][detail] === undefined) throw new Error('Detalhe indisponível');

    for (const object of professionalBoard) {
      if (object.id === id ) {
        return object[detail];
      }
    }
    throw new Error ('ID não identificada');
};
// console.log(searchEmployee('4678-2', 'firstName'));
// console.log(searchEmployee('4678-2', 'aniversario'));

module.exports = {professionalBoard, searchEmployee};
