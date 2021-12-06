const inputNumEl = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxContainerEl = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreateEl.addEventListener('click', onCreateBtnClick);
btnDestroyEl.addEventListener('click', destroyBox);

let size = 20;

function createBox(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');

    newDiv.style.width = size + '1px';
    newDiv.style.height = size + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.borderRadius = '5px 10px';
    newDiv.style.marginTop = '5px';

    fragment.append(newDiv);
    size += 5;

    boxContainerEl.append(fragment);
  }
}

function onCreateBtnClick() {
  const amount = Number(inputNumEl.value);

  createBox(amount);
}

function destroyBox() {
  size = 20;
  boxContainerEl.innerHTML = '';
}
