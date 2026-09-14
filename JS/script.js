document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const closeB = document.querySelector('button.close');

  menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });
  closeB.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});
