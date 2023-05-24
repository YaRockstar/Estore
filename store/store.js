import { URL_PRODUCTS } from '../constants/constants.js';
import { getProducts } from '../api/api.js';

export const store = {
  state: {
    user: {
      name: 'user',
      lastName: 'lastName',
      area: 'area',
    },
    productList: await getProducts(URL_PRODUCTS),
    cart: localStorage.getItem('cart') || [],
  },
};
