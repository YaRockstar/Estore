export const Order = (user, totalPrice) => {
  return `
    <h2>Оформление заказа</h2>
      <h3>Данные пользователя</h3>
      <input class="user-name" type="text" placeholder="Имя" value="${user?.name || ''}">
      <input class="user-email" type="text" 
        placeholder="Email (Обязательно)" value="${user?.email || ''}">
      <input class="user-phone"type="text" placeholder="Телефон" value="${user?.phone || ''}">
      <h3>Данные доставки</h3>
      <input class="user-address" type="text" placeholder="Адрес">
      <div>
        Итого: ${totalPrice || 0}₽
      </div>
      <button data-type="place-order">
        Оформить заказ
      </button>
  `;
};
