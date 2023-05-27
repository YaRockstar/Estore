export const store = {
  state: {
    user: {
      email: '',
      isAuth: false,
    },
    productList: [],
    cart: {
      totalPrice: 0,
      list: {},
    },
  },

  mutations: {
    addToCart(product) {
      const cart = store.state.cart;
      const id = product.id;

      if (cart.list[id]) {
        cart.list[id].count++;
        cart.totalPrice += cart.list[id].price;
        return;
      }

      cart.list[id] = {
        id,
        name: product.name,
        price: product.price,
        count: 1,
        image: product.image_path,
      };

      cart.totalPrice += cart.list[id].price;
    },

    removeFromCart(productId) {
      const cart = store.state.cart;

      if (cart.list[productId].count === 1) {
        cart.totalPrice -= cart.list[productId].price;
        delete cart.list[productId];
        return;
      }

      cart.list[productId].count--;
      cart.totalPrice -= cart.list[productId].price;
    },

    clearCart() {
      store.state.cart.totalPrice = 0;
      store.state.cart.list = {};
    },
  },
};
