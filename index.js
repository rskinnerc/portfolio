const menuBtn = document.querySelector('#menu-btn');
const menuNav = document.querySelector('#menu-nav');
const navLinks = document.querySelectorAll('.toolbar ul > li');
const recentWorksListItem = document.querySelector('#recent-works li');

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
    featured_img: 'mobile-popup-img.svg',
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
    featured_img: 'mobile-popup-img.svg',
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
    featured_img: 'mobile-popup-img.svg',
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
    featured_img: 'mobile-popup-img.svg',
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
    featured_img: 'mobile-popup-img.svg',
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
    featured_img: 'mobile-popup-img.svg',
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
  title.innerHTML = RECENT_WORKS[i].title;
  const categories = card.querySelector('ul.card-categories');
  for (let j = 0; j < RECENT_WORKS[i].technologies.length; j += 1) {
    const item = document.createElement('li');
    item.innerHTML = RECENT_WORKS[i].technologies[j];
    categories.append(item);
  }

  recentWorksListItem.after(card);
}

recentWorksListItem.remove();