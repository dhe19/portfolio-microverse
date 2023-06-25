// store all projects' data
// and create all the projects in the dom

export const projectsData = [
  {
    id: 'dev-project-1',
    title: 'React Store',
    company: 'Canopy',
    projectType: 'Back End Dev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: 'project_1.png',
  },
  {
    id: 'dev-project-2',
    title: 'React Portfolio',
    company: 'Canopy',
    projectType: 'Back End Dev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    img: 'project_2.png',
  },
  {
    id: 'dev-project-3',
    title: 'Rails Store',
    company: 'Canopy',
    projectType: 'Back End Dev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    img: 'project_3.png',
  },
  {
    id: 'dev-project-4',
    title: 'CRUD RAILS',
    company: 'Canopy',
    projectType: 'Back End Dev',
    date: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript', 'Ruby on rails'],
    img: 'project_4.png',
  },

];

const htmlProject = projectsData.map((e, i) => ` 
<article class="card">
<header class="card-header">
  <img
    src="./images/projects/${e.img}"
    class="card-image"
    alt="project img"
  />
</header>
<div class="card-content">
  <h3 class="card-title">${e.title}</h3>
  <ul class="card-features">
    <li class="card-client">${e.company.toUpperCase()}</li>
    <li class="card-info">${e.projectType}</li>
    <li class="card-info">${e.date}</li>
  </ul>
  <p class="card-description">
    A daily selection of privately personalized reads; no accounts or
    sign-ups required.
  </p>
  <ul class="card-tags-container">
    ${e.tags.map((i) => `<li class="card-tag">${i}</li>`).join(' ')}
    </ul>
  <div class="card-actions">
    <button class="primary-button" name="${i}" data-p = "${e.id}">See project</a>
  </div>
</div>
</article>
`).join(' ');

export default htmlProject;