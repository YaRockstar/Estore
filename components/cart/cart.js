import { CartItem } from '../cartItem/cartItem.js';

export const Cart = cart => {
  if (!cart.list) {
    return `<p>Корзина пуста</p>`;
  }

  const cartList = [];
  for (const key of Object.keys(cart.list)) {
    cartList.push(cart.list[key]);
  }

  return `
    <ul class="cart__cart-list">
      ${cartList.map(CartItem).join('')}
    </ul>
    <div class="cart__cart-info">
        Итоговая цена: <strong>${cart.totalPrice.toFixed(2)}₽</strong>
      <button class="clear-btn" data-type="clear">
        Очистить корзину
      </button>
      <button class="place-btn" data-type="place">
        Оформить заказ
      </button>
    </div>
  `;
};
