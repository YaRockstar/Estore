import { Product } from '../product/product.js';

export const ProductList = products => {
  const productListContent =
    products.length === 0
      ? '<p>Извините, скорее всего какая-то ошибка</p>'
      : products.map(Product).join('');

  return `
    <ul class="menu__product-list">
      ${productListContent}
    </ul>
  `;
};
