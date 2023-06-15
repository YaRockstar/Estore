import * as HTTP from './services/api.js';
import * as Render from './services/render.js';
import * as URL from '../constants/constants.js';

import { store } from './store/store.js';

const content = document.querySelector('.content');
const logo = document.querySelector('.header__logo');
const login = document.querySelector('.header__auth-btn');
const menuBtn = document.querySelector('.header__menu-btn');
const cartBtn = document.querySelector('.header__cart-btn');

const handleAddingToCart = event => {
  const productId = Number(event.target.closest('div')?.dataset?.id);
  const product = store.state.productList.find(p => p.id === productId);

  store.mutations.addToCart(product);
  localStorage.setItem('cart', JSON.stringify(store.state.cart));

  Render.renderCart(content, store.state.cart);
};

const handleRemovingFromCart = event => {
  const productId = Number(event.target.closest('div')?.dataset?.id);

  store.mutations.removeFromCart(productId);
  localStorage.setItem('cart', JSON.stringify(store.state.cart));

  Render.renderCart(content, store.state.cart);
};

const handleClearingCart = () => {
  store.mutations.clearCart();
  localStorage.removeItem('cart');

  Render.renderCart(content, store.state.cart);
};

const handleMoveToPlacingOrder = () => {
  if (store.state.user.isAuth) {
    Render.renderOrder(content, {
      user: store.state.user,
      totalPrice: store.state.cart.totalPrice,
    });
    return;
  }

  Render.renderRegistrationPage(content);
};

const handlePlacingOrder = async () => {
  const name = document.querySelector('.user-name').value;
  const email = document.querySelector('.user-email').value;
  const phone = document.querySelector('.user-phone').value;
  const address = document.querySelector('.user-address').value;

  store.state.user.name = name;
  store.state.user.email = email;
  store.state.user.phone = phone;
  store.state.user.address = address;

  await HTTP.postOrder(URL.ORDER_URL, {
    user: store.state.user,
    cart: store.state.cart,
  });
};

content.addEventListener('click', async event => {
  const productId = Number(event.target.dataset?.id);

  if (productId) {
    const product = store.state.productList.find(product => product.id === productId);
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
    return;
  }

  if (cookedCategories.includes(categoryName)) {
    const cookedList = store.state.productList.filter(
      product => product.cooked_category_name === categoryName
    );

    Render.renderProducts(productListWrap, cookedList);
    return;
  }

  if (productListWrap) {
    Render.renderProducts(productListWrap, store.state.productList);
    return;
  }

  const type = event.target.dataset?.type;

  if (type === 'clear') {
    handleClearingCart();
    return;
  }

  if (type === 'add') {
    handleAddingToCart(event);
    return;
  }

  if (type === 'remove') {
    handleRemovingFromCart(event);
    return;
  }

  if (type === 'place') {
    handleMoveToPlacingOrder();
    return;
  }

  // if (type === 'place-order') {
  //   handlePlacingOrder();
  //   return;
  // }

  if (type === 'login') {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const formData = new FormData(form);
      if (await HTTP.authenticate(formData, URL.AUTH_URL)) {
        store.state.user.isAuth = true;

        Render.renderMainPage(content);
        Render.renderAccountBtn(login, `${store.state.user.email}`);
      }
    });
    return;
  }

  if (type === 'register') {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', async event => {
      event.preventDefault();

      const formData = new FormData(form);
      if (await HTTP.register(formData, URL.REGISTER_URL)) {
        Render.renderAuthPage();
      }
    });
    return;
  }
});

logo.addEventListener('click', () => {
  Render.renderMainPage(content);
});

login.addEventListener('click', () => {
  Render.renderAuthPage(content);
});

menuBtn.addEventListener('click', () => {
  Render.renderMenu(content, store.state.productList);
});

cartBtn.addEventListener('click', () => {
  Render.renderCart(content, store.state.cart);
});

const start = async () => {
  try {
    store.state.productList = await HTTP.getProducts(URL.PRODUCTS_URL);

    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    store.state.cart = localStorageCart ? localStorageCart : store.state.cart;
  } catch (e) {
    console.log(e.message);
  }
};

await start();
