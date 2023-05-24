import { store } from './store/store.js';
import { productService } from './services/productService.js';

import * as Render from './render/render.js';

const content = document.querySelector('.content');
const logo = document.querySelector('.header__logo');
const menuBtn = document.querySelector('.header__menu-btn');
const cartBtn = document.querySelector('.header__cart-btn');

const start = async () => {};

logo.addEventListener('click', () => {
  Render.renderMainPage(content);
});

menuBtn.addEventListener('click', () => {
  Render.renderMenu(content, store.state.productList);
});

cartBtn.addEventListener('click', event => {
  const productId = event.target.dataset?.id;

  if (productId) {
  }
});

await start();
