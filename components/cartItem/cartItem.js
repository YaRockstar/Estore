export const CartItem = item => {
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
};
