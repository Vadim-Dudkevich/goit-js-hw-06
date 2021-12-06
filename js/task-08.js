const getForm = document.querySelector('login-form');
let message = '';

getForm.addEventListener('submit', onFormSubmitEl);

function onFormSubmitEl(event) {
  event.preventDefault();
}

const formEl = event.currentTarget.elements;

const mailEl = formEl.email.value;
const passwordEl = formEl.password.value;
const formData = {
  mailEl,
  passwordEl,
};

if (
  mailEl === '' ||
  passwordEl === '' ||
  (mailEl === '' && passwordEl === '')
) {
  message = alert(`All fields must be completed`);
}
