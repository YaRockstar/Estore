export const AuthPage = () => {
  return `
    <form class="login-form" action="auth.php" method="POST">
      <h2>Вход в аккаунт</h2>
      <div class="form-group">
        <label for="username">Имя пользователя</label>
        <input type="text" id="username" name="username" placeholder="Введите имя пользователя" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" name="password" placeholder="Введите пароль" required>
      </div>
      <button type="submit" datatype="login">Войти</button>
    </form>
  `;
};
