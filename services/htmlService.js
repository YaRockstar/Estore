export const htmlService = {
  paintProduct(product) {
    return `
      <li>
        <button class="cart-btn" data-id="${product.id}">
          Add to cart
        </button>
        <img src="${product.img}" name="${name}"/>
        <small>${title}</small>
        <small>
          <strong>$${product.price}</strong>
        </small>
      </li>
    `;
  },
};
