export const Product = product => {
  return `
    <li class="menu__product-list__item">
      <img src="${product.image_path}" class="menu__product__img"/>
      <div class="menu__product-list__name">${product.name}</div>
      <div class="menu__product-list__price">Цена: ${product.price}₽</div>
      <div class="menu__product-list__categories-wrap">
        <div class="menu__product-list__category">
          Вид: ${product.cooked_category_name}
        </div>
        <div class="menu__product-list__category">
          Сезон: ${product.season_category_name}
        </div>
      </div>
      <button class="menu__product__toCart-btn" data-id="${product.id}">
        В корзину
      </button>
    </li>
  `;
};
