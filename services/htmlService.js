export const htmlService = {
  paintProduct(product) {
    return `
      <li>
        <button class="cart-btn" data-id="${product.id}">
          Add to cart
        </button>
        <img src="${product.img}" name="${name}"/>
        <small>${product.name}</small>
        <small>
          <strong>$${product.price}</strong>
        </small>
      </li>
    `;
  },

  paintProducts(products = []) {
    if (products.length === 0) {
      return `<p>Извините, скорее всего какая-то ошибка (((</p>`;
    }
    return products.map(this.paintProduct).join('');
  },
};
