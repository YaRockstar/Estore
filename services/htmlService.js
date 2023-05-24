export const htmlService = {
  paintProduct(product) {
    return `
      <li class="menu__product-list__item">
        <img src="${product.image_path}" class="menu__product__img"/>
        <div class="menu__product-list__name">${product.name}</div>
        <div class="menu__product-list__price">Цена: ${product.price}₽</div>
        <div class="menu__product-list__categories-wrap">
          <div class="menu__product-list__category">Вид: ${product.cooked_category_name}</div>
          <div class="menu__product-list__category">Сезон: ${product.season_category_name}</div>
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
    const totalPrice = item.price * item.count;
    return `
      <li class="cart__cart-list__item">
        <img src="${item.image}" class="cart__cart-list__item__img"/>
        <div class="cart__cart-list__item__info">
          <div class="cart__cart-list__item__price">
            Ролл: ${item.name}
          </div>
          <div class="cart__cart-list__item__price">
            Цена за один: ${item.price}₽
          </div>
          <div class="cart__cart-list__item__total-price">
            Всего: ${totalPrice}₽
          </div>
          <div data-id=${item.id}>
            <button class="cart__cart-list__item__add-btn" data-type="add">+</button>
            ${item.count}
            <button class="cart__cart-list__item__remove-btn" data-type="remove">-</button>
          </div>
        </div>
      </li>
    `;
  },

  paintCart(cart) {
    if (!cart.list) {
      return `<p>Корзина пуста</p>`;
    }

    const cartList = [];
    for (const key of Object.keys(cart.list)) {
      cartList.push(cart.list[key]);
    }

    return `
      <ul class="cart__cart-list">
        ${cartList.map(this.paintCartItem).join('')}
      </ul>
      <div class="cart__cart-info">
          Итоговая цена: <strong>${cart.totalPrice.toFixed(2)}₽</strong>
        <button class="clear-btn" data-type="clear">
          Очистить корзину
        </button>
        <button class="clear-btn" data-type="clear">
          Оформить заказ
        </button>
      </div>
    `;
  },
};
