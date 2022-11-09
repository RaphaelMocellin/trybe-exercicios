const validation = new JustValidate('#my-form');

validation
  .addField('#name-input', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email-input', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Email too short'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Email too long'
    }
  ])
  .addField('#awnswer', [
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'Message too long'
    }
  ])

// const submitBtn = document.querySelector('#submit-btn');
// const imgCheck = document.querySelector('#img-check');


// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     const validation = textInputValidation();
//     if (validation === false) {
//         alert('Dados Inválidos')
//     } else {
//         alert('Dados enviados com sucesso!');
//     }
// })

// imgCheck.addEventListener('change', () => {
//     submitBtn.disabled = !imgCheck.checked;
// })

// function textInputValidation() {
//     const email = document.querySelector('#email-input').value.length;
//     const invalidEmail = email < 10 || email > 50;
  
//     const name = document.querySelector('#name-input').value.length;
//     const invalidName = name < 10 || name > 40;
  
//     const reason = document.querySelector('#awnswer').value.length;
//     const invalidReason = reason > 500;
  
//     if (invalidEmail || invalidName || invalidReason) {
//       return false;
//     }
//     else {
//       return true;
//     }
//   }