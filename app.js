import { data } from './data/data.js';

document.querySelector('.header__menu-btn').addEventListener('click', () => {
  const content = document.querySelector('.content');
  content.innerHTML = data;
});
