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

export const authenticate = async (data, URL) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Ошибка запроса: ' + response.status);
    }

    const result = await response.json();

    if (result.token) {
      localStorage.setItem('token', result.token);
      console.log('Аутентификация прошла успешно');
    } else if (result.e) {
      console.error('Ошибка аутентификации:', result.e);
    }
  } catch (e) {
    console.error('Ошибка запроса:', e);
  }
};
