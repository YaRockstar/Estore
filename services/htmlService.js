export const htmlService = {
  paintProduct(product) {
    return `
      <li class="menu__product-list__item">
        <img src="${product.image_path}" class="menu__product__img"/>
        <div class="menu__product-list__name">${product.name}</div>
        <div class="menu__product-list__price">Цена: ${product.price}₽</div>
        <div class="menu__product-list__categories-wrap">
          <div class="menu__product-list__category">Категория: ${product.cooked_category_name}</div>
          <div class="menu__product-list__category">Категория: ${product.season_category_name}</div>
        </div>
        <button class="menu__product__toCart-btn" data-id="${product.id}">
          В корзину
        </button>
      </li>
    `;
  },

  paintProducts(products) {
    if (products.length === 0) {
      return `
        <ul class="menu__product-list">
          <p>Извините, скорее всего какая-то ошибка (((</p>
        </ul>
      `;
    }
    return `
      <ul class="menu__product-list">
        ${products.map(this.paintProduct).join('')}
      </ul>
    `;
  },

  paintCartItem(item) {
    return `
      <li class="cart__list__item">
        <img src="${item.image_path}" class="menu__product__img"/>
        <div class="menu__product-list__name">${product.name}</div>
        <div class="menu__product-list__price">${product.price}₽</div>
        <button class="menu__product__toCart-btn" data-id="${product.id}">
          В корзину
        </button>
      </li>
    `;
  },

  paintCart(cartItems) {
    if (cartItems.length === 0) {
      return `
        <ul class="menu__product-list">
          <p>Ваша корзина пока что пустая</p>
        </ul>
      `;
    }
    return `
      <ul class="menu__product-list">
        ${cartItems.map(this.paintCartItem).join('')}
      </ul>
    `;
  },
};
