document.addEventListener('DOMContentLoaded', () => {
 const track = document.querySelector(".track");

if (track) {
 const slides = document.querySelectorAll(".slides");
 const dots = document.querySelectorAll(".dot");
 const hero = document.querySelector(".hero");
 let currentIndex = 0; 

function goToSlide(index) {
 currentIndex = (index + slides.length) % slides.length; 
 track.style.transform = `translateX(-${currentIndex * 100}%)`;

 dots.forEach((dot, i) => {
  dot.classList.toggle('active', i === currentIndex);
  if (i === currentIndex) {
  dot.setAttribute('aria-current', 'true');
  } else {
  dot.removeAttribute('aria-current');
  }
 });
}

dots.forEach((dot, i) => {
 dot.addEventListener('click', () => goToSlide(i));
});

hero.setAttribute('tabindex', '0');
hero.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
 if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
});

 goToSlide(0); 
 }
});
