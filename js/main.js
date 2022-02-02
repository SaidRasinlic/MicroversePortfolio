const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document
  .querySelector(".openMenu")
  .addEventListener('click', displayMobileMenu);
closeMobileItems.forEach((element) =>
  element.addEventListener("click", closeMobileMenu)
);

const projectDetail = [{
  title: "Tonic",
  exprience: ["CANOPY", "Back End Dev", "2015"],
  desription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  popDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  technologies: ["html", "css", "javascript"],
  popupTech: ["html", "css", "javaScript", "github", "Ruby", "Bootstrap"],
  image: "./images/facebook-360.svg",
  imageMobile: "./images/tonic-portfolio-one.svg",
  imagePopup: "./images/nature.svg",
  imageMobilePopup: "./images/tonic-portfolio-one.svg",
  seeLive: "https://saidrasinlic.github.io/MicroversePortfolio/",
  seeSource: "https://github.com/SaidRasinlic/MicroversePortfolio",
 },
 {
  title: 'Multi-Post Stories',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  technologies: ["html", "Ruby on rails", "css", "javascript"],
  popupTech: ["html", "css", "javaScript", "github", "Ruby", "Bootstrap"],
  image: "./images/multipost-desk.svg",
  imageMobile: "./images/multi-portfolio-two.svg",
  imagePopup: "./images/multipost-desk.svg",
  imageMobilePopup: "./images/multi-portfolio-two.svg",
  seeLive: "https://saidrasinlic.github.io/MicroversePortfolio/",
  seeSource: "https://github.com/SaidRasinlic/MicroversePortfolio",
 },
 {
  title: "Facebook 360",
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/facebook-360.svg",
  imageMobile: './images/tonic-portfolio-two.svg',
  imagePopup: './images/facebook-360.svg',
  imageMobilePopup: './images/tonic-portfolio-two.svg',
  seeLive: 'https://saidrasinlic.github.io/MicroversePortfolio/',
  seeSource: 'https://github.com/SaidRasinlic/MicroversePortfolio',
 },
 {
  title: 'Uber Navigation',
  exprience: ['UBER', 'Lead Developer', '2018'],
  desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
  popDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.",
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['html', 'css', 'javaScript', 'github', 'Ruby', 'Bootstrap'],
  image: './images/uber-nav.svg',
  imageMobile: './images/multi-portfolio-two.svg',
  imagePopup: "./images/uber-nav.svg",
  imageMobilePopup: './images/multi-portfolio-two.svg',
  seeLive: 'https://saidrasinlic.github.io/MicroversePortfolio/',
  seeSource: 'https://github.com/SaidRasinlic/MicroversePortfolio',
 },
];

/* Project detail population when the pages loads */
/* Display Popup modal */

const popupModal = document.querySelector('#portfolioPopup');
const displayPopupModal = (i) => {
 let tech = '';
 let techPop = '';
 let experienceList = '';

 for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
  tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
 }

 for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
  techPop += `<li class="lang-group" id="mobile">${projectDetail[i].popupTech[j]}</li>`;
 }

 for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
  experienceList +=
   k === 0 ?
   `<li class="list-main">${projectDetail[i].exprience[k]}</li>` :
   `<li class="titles-item">${projectDetail[i].exprience[k]}</li>`;
 }
 document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-flex">
      <div>
        <div class="works-flex-pop">
          <h3 class="intro-text-works">${projectDetail[i].title}</h3>
          <span> <a onclick="closePopupModal()" href="javascript:void(0)" class="close-popup">X</a></span>
      </div>
      <ul class="works-flex-item titles-container">
      ${experienceList}
      </ul>
      </div>
      <div class="works-flex-item work-image">
          <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
          <img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
      </div>
      <div class="project-tags">
          <div class="work-description">
            <p class="works-flex-item works-description">
              ${projectDetail[i].popDescription}
            </p>
          </div>
          <div class="tags">
              <ul class="lang-container mobile">
              ${tech}
              </ul>
              <ul class="lang-container">
              ${techPop}
              </ul>
              <div class="btn-tags">
                <a href="${projectDetail[i].seeLive}" class="btn-see-project">See Live
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <a href="${projectDetail[i].seeSource}" class="btn-see-project">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
          </div>
      </div>
      </div>
  `;
 popupModal.style.display = "block";
};
document
 .querySelectorAll('.see-project')
 .forEach((row) =>
  row.addEventListener('click', () =>
   displayPopupModal(row.getAttribute('data-index'))
  )
 );

const closeModal = document.querySelector('#portfolioPopup'); // eslint-disable-line no-unused-vars
const closePopupModal = () => {
 closeModal.style.display = 'none';
};
