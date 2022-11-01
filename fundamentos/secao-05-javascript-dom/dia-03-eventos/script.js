const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
const createNumberDays = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');
    
    for (let day of decemberDaysList) {
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
        dayItem.className = 'day';

        if (day === 24 || day === 25 || day === 31) {
            dayItem.classList.add('holiday');
        }
        if (day === 4 || day === 11 || day === 18 || day === 25) {
            dayItem.classList.add('friday');
        }

        daysList.appendChild(dayItem);
    }
}

createNumberDays();
  