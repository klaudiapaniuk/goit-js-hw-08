import '/src/css/main.min.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', submitBtn);

function submitBtn(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  e.currentTarget.reset();
  localStorage.clear();
}

form.addEventListener('input', throttle(formValue, 500));

function formValue() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function collectData() {
  const localStorageData = localStorage.getItem(STORAGE_KEY);
  if (localStorageData) {
    const currentData = JSON.parse(localStorageData);
    email.value = currentData.email;
    message.value = currentData.message;
  }
}

collectData();
