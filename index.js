const menuBtn = document.querySelector('#menu-btn');
const menuNav = document.querySelector('#menu-nav');
const navLinks = document.querySelectorAll('.toolbar ul > li');
const recentWorksListItem = document.querySelector('#recent-works li');
const recentWorksContainer = document.querySelector('#recent-works');
const popup = document.querySelector('#popup');
const closePopupBtn = popup.querySelector('#popup .close-popup');

menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('menu-hidden');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuNav.classList.toggle('menu-hidden');
  });
});

const RECENT_WORKS = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_img: 'mobile-popup-img.png',
    technologies: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    live: '#',
    source: '#',
  },
];

for (let i = 0; i < RECENT_WORKS.length; i += 1) {
  const card = recentWorksListItem.cloneNode(true);
  const title = card.querySelector('h3.card-title');
  const button = card.querySelector('button');
  const categories = card.querySelector('ul.card-categories');

  title.innerHTML = RECENT_WORKS[i].title;
  button.setAttribute('id', `seeProjectButton-${i}`);
  for (let j = 0; j < RECENT_WORKS[i].technologies.length; j += 1) {
    const item = document.createElement('li');
    item.innerHTML = RECENT_WORKS[i].technologies[j];
    categories.append(item);
  }

  recentWorksListItem.after(card);
}

recentWorksListItem.remove();

recentWorksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('primary-btn')) {
    const project = event.target.id.split('-');
    const popupTitle = popup.querySelector('.popup-title');
    const popupDescription = popup.querySelector('#popup p');
    const popupImg = popup.querySelector('#featured_img');
    const popupTechnologies = popup.querySelector('#popup ul');
    popupTechnologies.innerHTML = '';
    RECENT_WORKS[project[1]].technologies.forEach((technology) => {
      const techItem = document.createElement('li');
      techItem.innerHTML = technology;
      popupTechnologies.prepend(techItem);
    });

    popupImg.setAttribute('src', RECENT_WORKS[project[1]].featured_img);
    popupImg.setAttribute('alt', RECENT_WORKS[project[1]].title);
    popupDescription.innerHTML = RECENT_WORKS[project[1]].description;
    popupTitle.innerHTML = RECENT_WORKS[project[1]].title;
    popup.classList.toggle('popup-hidden');
  }
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.toggle('popup-hidden');
});