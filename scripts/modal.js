import { projectsData } from './utils/data.js';
// se encargara de todos los mostrar un modal
const modalContainer = document.getElementById('modal-container');
let modal;
const closeButton = document.createElement('img');
closeButton.className = 'modal-close';
closeButton.src = 'images/svg/Icon-Cancel.svg';
closeButton.alt = 'close';

const closeModal = () => {
  modal.classList.toggle('d-none');
  document.body.style.overflow = 'auto';
};

closeButton.onclick = () => closeModal();

const openModal = (id) => {
  // require data info
  const projectInfo = projectsData.find((e) => e.id === id);

  modal = modal || modalContainer.querySelector('article');

  modal.style.top = `${window.pageYOffset}px`;
  document.body.style.overflow = 'hidden';

  modal.innerHTML = ` 
    <div class="blur"></div>
    <div class="project-modal">
      <header>
        <h2>${projectInfo.title}</h2>
      </header>
      <ul>
        <li class="card-client">${projectInfo.company}</li>
        <li class="card-info">${projectInfo.projectType}</li>
        <li class="card-info">${projectInfo.date}</li>
      </ul>
      <div class="image">
        <img src="./images/projects/${projectInfo.img}" alt="project example" />
      </div>
      <div class="modal-details">
        <p class="card-description modal-description">
         ${projectInfo.description}
        </p>
        <div class="modal-info">
          <ul class="modal-tags-container">
            ${projectInfo.tags.map((e) => `<li class="card-tag">${e}</li>`).join(' ')}
          </ul>

          <div class="modal-actions">
            <a href="#" class="secondary-button">
              See source
              <img src="./images/svg/icon-github.svg" alt="github" />
            </a>
            <a href="#" class="secondary-button">
              See live
              <img src="./images/svg/icon-open.svg" alt="live" />
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
  modal.querySelector('header').appendChild(closeButton);
  modal.classList.toggle('d-none');
};

export default openModal;
