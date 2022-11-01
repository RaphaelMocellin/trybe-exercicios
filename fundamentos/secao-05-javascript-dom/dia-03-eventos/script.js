const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

// Parte 1

const createNumberDays = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const daysList = document.querySelector("#days");

  for (let day of decemberDaysList) {
    let dayItem = document.createElement("li");
    dayItem.innerText = day;
    dayItem.className = "day";

    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add("friday");
    }

    daysList.appendChild(dayItem);
  }
};

createNumberDays();

// Parte 2

const createBtn = (name, id) => {
  let btn = document.createElement("button");
  btn.innerText = name;
  btn.id = id;

  let btnContainer = document.querySelector(".buttons-container");
  btnContainer.appendChild(btn);
};

createBtn("Feriados", "btn-holiday");

// Parte 3

const changeHolidayColor = () => {
  let allHolidays = document.querySelectorAll(".holiday");

  for (let holiday of allHolidays) {
    if (holiday.classList.contains("color")) {
      holiday.style.color = "rgb(119,119,119)";
      holiday.classList.toggle("color");
    } else {
      holiday.style.color = "rgb(300,0,0)";
      holiday.classList.toggle("color");
    }
  }
};

let holidayBtn = document.querySelector("#btn-holiday");
holidayBtn.addEventListener("click", changeHolidayColor);

// Parte 4

createBtn("Sexta-feira", "btn-friday");

// Parte 5

const changeFridayText = () => {
  let allFridays = document.querySelectorAll(".friday");
  console.log(allFridays);

  for (let friday of allFridays) {
    if (friday.classList.contains("active")) {
      friday.innerText = friday.nextElementSibling.innerText - 1;
      friday.classList.toggle("active");
    } else {
      friday.innerText = "SEXTOU!";
      friday.classList.toggle("active");
    }
  }
};

let fridayBtn = document.querySelector("#btn-friday");
fridayBtn.addEventListener("click", changeFridayText);

// Parte 6

const createZoom = () => {
    let allDays = document.querySelectorAll('.day');

    for (let day of allDays) {
        day.addEventListener('mouseover', (event) => {
            event.target.style.scale = 1.5;
        })
    }
}

const leaveZoom = () => {
    let allDays = document.querySelectorAll('.day');

    for (let day of allDays) {
        day.addEventListener('mouseleave', (event) => {
            event.target.style.scale = 1;
        })
    }
}

createZoom();
leaveZoom();

// Parte 7