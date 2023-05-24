import { store } from './store/store.js';
import { productService } from './services/productService.js';

import { URL_PRODUCTS } from '../constants/constants.js';
import * as HTTP from '../api/api.js';
import * as Render from './render/render.js';

const content = document.querySelector('.content');
const logo = document.querySelector('.header__logo');
const menuBtn = document.querySelector('.header__menu-btn');
const cartBtn = document.querySelector('.header__cart-btn');

const start = async () => {
  try {
    store.state.productList = await HTTP.getProducts(URL_PRODUCTS);

    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    store.state.cart = localStorageCart ? localStorageCart : store.state.cart;
  } catch (e) {
    console.log(e.message);
    // productsContainer.innerHTML = `<p style="color: red">Error</p>`;
  }
};

content.addEventListener('click', event => {
  const productId = Number(event.target.dataset?.id);

  if (productId) {
    const product = store.state.productList.find(p => p.id === productId);
    store.mutations.addToCart(product);
    localStorage.setItem('cart', JSON.stringify(store.state.cart));
    return;
  }

  const categoryName = event.target.value;
  const productListWrap = document.querySelector('.menu__product-list-wrap');

  const seasonCategories = ['Летние', 'Осенние', 'Зимние', 'Весенние'];
  const cookedCategories = ['Классические', 'Фирменные', 'Запеченные'];

  if (seasonCategories.includes(categoryName)) {
    const seasonList = store.state.productList.filter(
      product => product.season_category_name === categoryName
    );
    Render.renderProducts(productListWrap, seasonList);
  } else if (cookedCategories.includes(categoryName)) {
    const cookedList = store.state.productList.filter(
      product => product.cooked_category_name === categoryName
    );
    Render.renderProducts(productListWrap, cookedList);
  } else {
    Render.renderProducts(productListWrap, store.state.productList);
  }
});

logo.addEventListener('click', () => {
  Render.renderMainPage(content);
});

menuBtn.addEventListener('click', () => {
  Render.renderMenu(content, store.state.productList);
});

cartBtn.addEventListener('click', event => {});

await start();
