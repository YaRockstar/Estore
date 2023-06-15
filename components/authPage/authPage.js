export const AuthPage = () => {
  return `
    <form id="login-form" class="login-form">
      <h2>Вход в аккаунт</h2>
      <div class="form-group">
        <label for="email">Имя пользователя</label>
        <input type="text" id="email" name="email" placeholder="Введите почту" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder="Введите пароль" required>
      </div>
      <button data-type="login">Войти</button>
    </form>
  `;
};
