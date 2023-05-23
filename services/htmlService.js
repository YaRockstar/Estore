export const htmlService = {
  paintProduct(product) {
    const productName = product.name
      .split(' ')
      .map(word => word + '<wbr>')
      .join(' ');
    return `
      <li class="menu__product-list__item">
        <img src="${product.img}" class="menu__product__img"/>
        <div class="menu__product-list__name">${productName}</div>
        <div class="menu__product-list__price">${product.price}₽</div>
        <button class="menu__product__toCart-btn" data-id="${product.id}">
          В корзину
        </button>
      </li>
    `;
  },

  paintProducts(products = []) {
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
};
