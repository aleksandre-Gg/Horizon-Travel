document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const closeB = document.querySelector('button.close');
  
  let resizeTimer;

  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    body.classList.toggle('no-scroll');
    menu.setAttribute('aria-expanded', isOpen);
  });
  closeB.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('no-scroll');
    menu.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('resize', () => {
  body.classList.add('resizing');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => body.classList.remove('resizing'), 100);
  });
});
