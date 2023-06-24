import { email, form, submitBtn } from './formConstants.js';

let inserted = false;

const errorMessage = (message) => {
  const error = document.createElement('p');
  error.textContent = message;
  if (!inserted) { submitBtn.insertAdjacentElement('beforebegin', error); }
  inserted = true;
};

form.onsubmit = (event) => {
  event.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
    errorMessage('Email must be in lower case');
  } else {
    form.submit();
  }
};
