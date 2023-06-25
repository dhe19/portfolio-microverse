import htmlProject from './utils/data.js';
import openModal from './modal.js';

const container = document.querySelector('.container-projects');
container.innerHTML = htmlProject;

window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('[data-p]');
  buttons.forEach((b) => { b.onclick = () => openModal(b.getAttribute('data-p')); });
});