document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  const closeB = document.querySelector('button.close');
  const reveal = document.querySelectorAll('.reveal');
  
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

  const isMobile = window.innerWidth <= 768;

  const observerOptions = {
  // check condition ? run if true, if false run else
  threshold: isMobile ? 0.02: 0.15, 
  // 2% threshold mobile, 15% threshold
  };

  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // remove once observed once
      observer.unobserve(entry.target);
     }
  });
  }, observerOptions);
// observe every element
reveal.forEach((element) => observer.observe(element));
});
