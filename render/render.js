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
      <div class="menu_categories">
        Сезон:
        <select name="season" class="menu_categories__season-select">
          <option class="menu_categories__item" value="Выбрать все">Выбрать все</option>
          <option class="menu_categories__item" value="Летние">Летние</option>
          <option class="menu_categories__item" value="Осенние">Осенние</option>
          <option class="menu_categories__item" value="Зимние">Зимние</option>
          <option class="menu_categories__item" value="Весенние">Весенние</option>
        </select>
        Вид:
        <select name="cooked" class="menu_categories__cooked-select">
          <option class="menu_categories__item" value="Выбрать все">Выбрать все</option>
          <option class="menu_categories__item" value="Классические">Классические</option>
          <option class="menu_categories__item" value="Фирменные">Фирменные</option>
          <option class="menu_categories__item" value="Запеченные">Запеченные</option>
        </select>
      </div>
      <div class="menu__product-list-wrap">
        ${htmlService.paintProducts(products)}
      </div>
    </div>
  `;
};

export const renderProducts = (element, products) => {
  element.innerHTML = htmlService.paintProducts(products);
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
