export const getProducts = async URL => {
  try {
    const response = await fetch(URL);
    const products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
};
