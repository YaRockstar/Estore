import { htmlService } from './services/htmlService.js';
// import { productService } from './services/productService.js';
import { store } from './store/store.js';

const logo = document.querySelector('.header__logo');
const menuBtn = document.querySelector('.header__menu-btn');
const content = document.querySelector('.content');

const renderProducts = products => {
  content.innerHTML = htmlService.paintProducts(products);
};

logo.addEventListener('click', () => {
  content.innerHTML = `
      <h1>
        Добро пожаловать в "Японский клуб"
      </h1>
      <h3>
        Мы предлагаем вам лучшие роллы в городе! Закажите сейчас и наслаждайтесь вкусом.
      </h3>
      <div class="main-image">
        <img src="assets/img/content/delivery.jpg" alt="Доставляем даже в удаленные районы" />
      </div>
  `;
});

menuBtn.addEventListener('click', () => {
  renderProducts(store.productList);
});

// const renderCart = cartList => {
//   cardContainer.innerHTML = html.paintCart(cartList);
// };
