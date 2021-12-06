const changeColor = document.querySelector('.change-color');
const showColor = document.querySelector('.color');

changeColor.addEventListener('click', event => {
  document.body.style.backgroundColor = getRandomHexColor();
});

changeColor.addEventListener('click', event => {
  showColor.textContent = getRandomHexColor();
});

// showColor.style.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
