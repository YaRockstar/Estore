import { ProductList } from '../productList/productList.js';

export const Menu = products => {
  return `
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
        ${ProductList(products)}
      </div>
    </div>
  `;
};
