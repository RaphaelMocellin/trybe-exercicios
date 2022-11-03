const createBtn = (name, idName, idLocal) =>  {
    let btn = document.createElement('button');
    btn.innerText = name;
    btn.id = idName;

    let appendLocal = document.getElementById(idLocal);

    appendLocal.appendChild(btn);
}

// Criando botões de cor de fundo
createBtn('white', 'white-btn', 'btn-background-color');
createBtn('black', 'black-btn', 'btn-background-color');
createBtn('green', 'green-btn', 'btn-background-color');
createBtn('blue', 'blue-btn', 'btn-background-color');
createBtn('yellow', 'yellow-btn', 'btn-background-color');

// Criando botões de cor do texto
createBtn('black', 'text-black-btn', 'text-color');
createBtn('red', 'text-red-btn', 'text-color');
createBtn('white', 'text-white-btn', 'text-color');

// Criando botões de tamanho da fonte
createBtn('8pt', 'text-8pt-btn', 'font-size');
createBtn('10pt', 'text-10pt-btn', 'font-size');
createBtn('12pt', 'text-12pt-btn', 'font-size');
createBtn('14pt', 'text-14pt-btn', 'font-size');
createBtn('20pt', 'text-20pt-btn', 'font-size');

// Criando botões de Espaçamento entre as linhas
createBtn('1', 'line-1-btn', 'line-height');
createBtn('normal', 'line-normal-btn', 'line-height');
createBtn('1.5', 'line-1.5-btn', 'line-height');
createBtn('2.0', 'line-2-btn', 'line-height');
createBtn('3.0', 'line-3-btn', 'line-height');

// Criando botões para tipo da fonte
createBtn('Arial', 'font-arial', 'font-family');
createBtn('Times New Roman', 'font-arial', 'font-family');

// Adicionando event listner para cor de fundo
document.body.style.backgroundColor = localStorage.getItem('backgroundColor');

const changeBackgroundColorHandler = () => {
    let backgroundColorBtns = document.querySelectorAll('#btn-background-color button');

    for (let btn of backgroundColorBtns) {
        btn.addEventListener('click', (event) => {
            localStorage.setItem('backgroundColor', event.target.innerText);
            let getColor = localStorage.getItem('backgroundColor');
            document.body.style.backgroundColor = getColor;
        })
    }
}

changeBackgroundColorHandler();

// Adicionando event listner para cor do texto
let allText = document.querySelectorAll('.text');

for (let text of allText) {
    text.style.color = localStorage.getItem('textColor');
}


const changeTextColorHandler = () => {
    let textColorBtns = document.querySelectorAll('#text-color button')

    for (let btn of textColorBtns) {
        btn.addEventListener('click', (event) => {
            localStorage.setItem('textColor', event.target.innerText);
            let getColor = localStorage.getItem('textColor');
            for (let text of allText) {
                text.style.color = getColor;
            }
        })
    }
}

changeTextColorHandler();

// Adicionando event listner para mudar o tamanho da fonte
for (let text of allText) {
    text.style.fontSize = localStorage.getItem('fontSize');
}

const changeFontSize = () => {
    let textColorBtns = document.querySelectorAll('#font-size button')

    for (let btn of textColorBtns) {
        btn.addEventListener('click', (event) => {
            localStorage.setItem('fontSize', event.target.innerText);
            let getSize = localStorage.getItem('fontSize');
            for (let text of allText) {
                text.style.fontSize = getSize;
            }
        })
    }
}

changeFontSize();