document.querySelector('.header__menu-btn').addEventListener('click', () => {
  const content = document.querySelector('.content');
  content.innerHTML = data;
});

document.querySelector('.header__logo').addEventListener('click', () => {
  const content = document.querySelector('.content');
  content.innerHTML = `
      <h1>
        Добро пожаловать в "Японский клуб"
      </h1>
      <h3>
        Мы предлагаем вам лучшие роллы в городе! Закажите сейчас и наслаждайтесь вкусом.
      </h3>
      <div class="main-image">
        <img src="assets/img/content/delivery.jpg" alt="Доставляем даже в удаленные районы" />
      </div>
  `;
});
