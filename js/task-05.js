const imputEl = document.querySelector('name-input');
const outputEl = document.querySelector('name-output');

// imputEl.addEventListener('imput', event => {
//   outputEl.textContent = event.currentTarget.value;
// });

imputEl.addEventListener('imput', onChange);
function onChange(event) {
  outputEl.textContent = event.currentTarget.value;
}

// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);
// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ' '
//     ? (outputEl.innerText = inputEl.trim())
//     : outputEl.textContent;
// }
