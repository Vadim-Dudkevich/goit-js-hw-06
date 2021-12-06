const wrapButtonEl = {
  buttonUpEl: document.querySelector("[data-action='increment']"),
  buttonDownEl: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};

wrapButtonEl.buttonUpEl.addEventListener('click', increment);
wrapButtonEl.buttonDownEl.addEventListener('click', decrement);

// !==========================
// const counterValue = 0;

// function increment() {
//   counterValue += 1;
//   document.getElementById('value').innerHTML = counterValue;
// }
// function decrement() {
//   counterValue -= 1;
//   document.getElementById('value').innerHTML = counterValue;
// }
