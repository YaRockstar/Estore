import { htmlService } from './services/htmlService.js';
import { productService } from './services/productService.js';
import { store } from './store/store.js';
import { data } from './data/data.js';

const logo = document.querySelector('.header__logo');
const menuBtn = document.querySelector('.header__menu-btn');
const content = document.querySelector('.content');

const renderMenu = products => {
  content.innerHTML = `
    <div class="content__menu">
      ${htmlService.paintProducts(products)}
    </div>
  `;
};

logo.addEventListener('click', () => {
  content.innerHTML = `
      <div class="content__main-page">
        <h1>
          Добро пожаловать в "Японский клуб"
        </h1>
        <h3>
          Мы предлагаем вам лучшие роллы в городе! Закажите сейчас и наслаждайтесь вкусом.
        </h3>
        <div class="main-page--image">
          <img src="assets/img/content/delivery.jpg" alt="Доставляем даже в удаленные районы" />
        </div>
      </div>
  `;
});

menuBtn.addEventListener('click', () => {
  console.log(data);
  renderMenu(store.state.productList);
});

// const renderCart = cartList => {
//   cardContainer.innerHTML = html.paintCart(cartList);
// };
