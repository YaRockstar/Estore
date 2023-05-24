import { htmlService } from '../services/htmlService.js';

export const renderMainPage = root => {
  root.innerHTML = `
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
};

export const renderMenu = (root, products) => {
  root.innerHTML = `
    <div class="content__menu">
      ${htmlService.paintProducts(products)}
    </div>
  `;
};

export const renderCart = (root, cartItems) => {
  root.innerHTML = `
    <div class="content__cart">
      ${htmlService.paintCart(cartItems)}
    </div>
  `;
};

export const renderPersonalAccount = root => {};
