const inputRangeEl = document.getElementById('font-size-control');
const inputTextEl = document.getElementById('text');

inputRangeEl.oninput = function () {
  inputTextEl.style.fontSize = inputRangeEl.value + 'px';
};
