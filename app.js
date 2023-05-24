import { productService } from './services/productService.js';
import { store } from './store/store.js';

import { renderMainPage, renderMenu, renderCart } from './render/render.js';

const logo = document.querySelector('.header__logo');
const menuBtn = document.querySelector('.header__menu-btn');
const content = document.querySelector('.content');

const start = () => {};

logo.addEventListener('click', () => {
  renderMainPage(content);
});

menuBtn.addEventListener('click', () => {
  renderMenu(content, store.state.productList);
});
