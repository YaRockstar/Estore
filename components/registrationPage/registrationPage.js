import { URL_REGISTER } from '../../constants/constants.js';

export const RegistrationPage = () => {
  return `
    <form class="registration-form" action="${URL_REGISTER}" method="POST">
      <h2>Регистрация</h2>
      <div class="form-group">
        <label for="email">Почта</label>
        <input type="email" id="email" name="email" placeholder="Введите почту" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder="Введите пароль" required>
      </div>
      <div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" id="address" name="address" placeholder="Введите адрес" required>
      </div>
      <div class="form-group">
        <label for="phone">Номер телефона</label>
        <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона" required>
      </div>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input type="text" id="firstName" name="firstName" placeholder="Введите имя" required>
      </div>
      <div class="form-group">
        <label for="lastName">Фамилия</label>
        <input type="text" id="lastName" name="lastName" placeholder="Введите фамилию" required>
      </div>
      <button type="submit" datatype="register">Зарегистрироваться</button>
    </form>
  `;
};
