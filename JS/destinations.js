document.addEventListener('DOMContentLoaded', () => {
 const track = document.querySelector(".track");
 const heroText = document.querySelectorAll(".hero-text"); 

if (track) {
 const slides = document.querySelectorAll(".slides");
 const dots = document.querySelectorAll(".dot");
 const hero = document.querySelector(".hero");
 const delay = 5000; // five seconds
 let timer;
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

function startTimer() {
 if (timer) {
  clearInterval(timer);
 }
 timer = setInterval(() => goToSlide(currentIndex + 1), delay);
}

function resetTimer() {
 if (timer) {
  clearInterval(timer);
  timer = null;
  startTimer();
 }
}

dots.forEach((dot, i) => {
 dot.addEventListener('click', () => {
 goToSlide(i);
 resetTimer(); 
 });
});


hero.setAttribute('tabindex', '0');
hero.addEventListener('keydown', (e) => {
 if (e.key === 'ArrowRight') {
  goToSlide(currentIndex + 1);
  resetTimer()
 }
 if (e.key === 'ArrowLeft') {
  goToSlide(currentIndex - 1);
  resetTimer()
 }
});

//stop timer while hovering over text
if (heroText.length) {
 heroText.forEach((text) => {
  text.addEventListener('mouseenter', () => clearInterval(timer)); 
  text.addEventListener('mouseleave', () => startTimer());
  });
}

 goToSlide(0); 
 startTimer();
 }
});
