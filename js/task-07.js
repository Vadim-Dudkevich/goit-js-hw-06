const refs = {
  inputRangeEl: document.querySelector('#font-size-control'),
  inputTextEl: document.querySelector('#text'),
};

refs.inputRangeEl.addEventListener('input', onChangeFontSize);
refs.inputTextEl.style.fontSize = `${refs.inputRangeEl.value}px`;

function onChangeFontSize(event) {
  refs.inputTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
