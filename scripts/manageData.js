import { email, userName, message } from './formConstants.js';

const saveData = () => {
  const data = { userName: userName.value, email: email.value, message: message.value };

  localStorage.setItem('userData', JSON.stringify(data));
};

const loadData = () => {
  if (localStorage.getItem('userData')) {
    const data = JSON.parse(localStorage.getItem('userData'));
    userName.value = data.userName;
    email.value = data.email;
    message.value = data.message;
  }
};

userName.addEventListener('input', saveData);
email.addEventListener('input', saveData);
message.addEventListener('input', saveData);

window.addEventListener('load', () => {
  loadData();
});
