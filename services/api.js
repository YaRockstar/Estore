import { renderAuthPage } from './render.js';

export const getProducts = async URL => {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
};

export const postOrder = async (URL, { user, cart }) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, cart }),
    });

    return await response.json();
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
};

export const getUser = async URL => {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса: ' + response.status);
    }

    const data = await response.json();
    console.log('Данные:', data);
  } catch (e) {
    console.error('Ошибка запроса:', e);
  }
};

export const authenticate = async (formData, URL) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Авторизация успешно выполнена');
      console.log(response.message);
      return true;
    } else {
      console.log('Ошибка при авторизации');
      renderAuthPage(document.querySelector('.content'));
      return false;
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    renderAuthPage(document.querySelector('.content'));
  }
};

export const register = async (formData, URL) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Регистрация успешно выполнена');
      return true;
    } else {
      console.log('Ошибка при регистрации');
      return false;
    }
  } catch (error) {
    console.log('Ошибка при отправке запроса:', error);
  }
};
