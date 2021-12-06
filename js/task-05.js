const imputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(imputEl);
console.log(outputEl);

imputEl.addEventListener('imput', event => {
  outputEl.textContent = event.currentTarget.value;
});

// imputEl.addEventListener('imput', onChange);
// function onChange(event) {
//   outputEl.textContent = event.currentTarget.value;
//   if (imputEl == '') {
//     outputEl.textContent = 'Anonymous';
//   }
// }

// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);
// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== ''
//     ? (outputEl.innerText = inputEl.trim())
//     : (outputEl.innerText = 'Anonymous');
// }
