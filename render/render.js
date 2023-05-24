import { htmlService } from '../services/htmlService.js';

export const renderMainPage = element => {
  element.innerHTML = `
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

export const renderMenu = (element, products) => {
  element.innerHTML = `
    <div class="content__menu">
      <div></div>
      ${htmlService.paintProducts(products)}
    </div>
  `;
};

export const renderCart = (element, cartItems) => {
  element.innerHTML = `
    <div class="content__cart">
      ${htmlService.paintCart(cartItems)}
    </div>
  `;
};

export const renderPersonalAccount = element => {};

export const renderError = (element, error) => {};
