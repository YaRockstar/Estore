export const RegistrationPage = () => {
  return `
    <form id="registration-form" class="registration-form">
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
        <label for="phone_number">Номер телефона</label>
        <input type="tel" id="phone_number" name="phone_number" placeholder="Введите номер телефона" required>
      </div>
      <div class="form-group">
        <label for="first_name">Имя</label>
        <input type="text" id="first_name" name="first_name" placeholder="Введите имя" required>
      </div>
      <div class="form-group">
        <label for="last_name">Фамилия</label>
        <input type="text" id="last_name" name="last_name" placeholder="Введите фамилию" required>
      </div>
      <button data-type="register">Зарегистрироваться</button>
    </form>
  `;
};
