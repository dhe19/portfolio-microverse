import htmlProject from './utils/data.mjs';
import { openModal } from './modal.js';
const container = document.querySelector(".container-projects");
container.innerHTML = htmlProject;



window.addEventListener('load', () => {
    console.log("loading data");
    const buttons = document.querySelectorAll('[data-p]')
    buttons.forEach(b => b.onclick = () => openModal(b.getAttribute('data-p')))
})