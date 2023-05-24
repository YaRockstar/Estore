export const store = {
  state: {
    user: {},
    productList: [],
    cart: {
      totalPrice: 0,
      list: {},
    },
  },
  mutations: {
    addToCart(product) {
      const cart = store.state.cart;
      console.log(cart);
      const id = product.id;
      if (cart.list[id]) {
        cart.list[id].count++;
        cart.totalPrice += cart.list[id].price;
        return;
      }

      cart.list[id] = {
        name: product.name,
        price: product.price,
        count: 1,
      };
      cart.totalPrice += cart.list[id].price;
    },

    removeFromCart(productId) {
      const cart = store.state.cart;

      if (cart.list[productId].count === 1) {
        cart = cart.list.filter(product => product.id !== productId);
        return;
      }
      cart.list[productId].count--;
      cart.totalPrice -= cart.list[productId].price;
    },

    clearCart() {
      cart.totalPrice = 0;
      cart.list = {};
    },
  },
};
