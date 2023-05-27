import * as Component from '../components/index.js';

export const renderMainPage = element => {
  element.innerHTML = Component.MainPage();
};

export const renderMenu = (element, products) => {
  element.innerHTML = Component.Menu(products);
};

export const renderProducts = (element, products) => {
  element.innerHTML = Component.ProductList(products);
};

export const renderCart = (element, cart) => {
  element.innerHTML = `
    <div class="content__cart">
      ${Component.Cart(cart)}
    </div>
  `;
};

export const renderOrder = (element, { user, totalPrice }) => {
  element.innerHTML = `
    <div class="content__order">
      ${Component.Order(user, totalPrice)}
    </div>
  `;
};

// export const renderPersonalAccount = element => {
//   element.innerHTML = `
//     <div class="content__cart">
//       ${htmlService.paint()}
//     </div>
//   `;
// };

// export const renderError = (element, error) => {};
