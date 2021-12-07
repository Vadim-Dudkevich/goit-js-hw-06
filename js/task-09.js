const changeColor = {
  changeColorEl: document.querySelector('.change-color'),
  selectedColorEl: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  changeColor.selectedColorEl.textContent = colorHex;
}

changeColor.changeColorEl.addEventListener('click', onColorChange);

// !=========================

// const changeColor = document.querySelector('.change-color');
// const showColor = document.querySelector('.color');

// changeColor.addEventListener('click', event => {
//   document.body.style.backgroundColor = getRandomHexColor();
// });

// changeColor.addEventListener('click', event => {
//   showColor.textContent = getRandomHexColor();
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
