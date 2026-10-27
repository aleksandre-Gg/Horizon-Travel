const tabs = document.querySelectorAll('.tab'); //buttons
const panels = document.querySelectorAll('.panel'); //panels, content

const track = document.querySelector('.track');
const gallery = document.querySelector('.gallery-wrapper');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    //loop through and remove active state for every tab
    tab.classList.add('active');
    //add the active tab
    document.getElementById(tab.dataset.tab).classList.add('active'); 
    //link to panel with id, dataset to look into buttons for custom attributes
  });
});

if (track) { //if track exists
  const slides = gallery.querySelectorAll('.slides');
  const previousArrow = gallery.querySelector('.arrow-previous');
  const nextArrow = gallery.querySelector('.arrow-next');

  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  const goToSlide = (index) => {
    currentIndex = Math.min(Math.max(index, 0), slides.length - 1);
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    previousArrow.disabled = currentIndex === 0; //prev arrow disabled for first slide
    nextArrow.disabled = currentIndex === slides.length - 1; //next arrow disabled for last slide
  };

  previousArrow.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextArrow.addEventListener('click', () => goToSlide(currentIndex + 1));

  const swipeFinger = () => {
    const distance = startX - endX; //distance measure how far finger moved horizontally
    const threshold = 50; //50 px threshold 

    if (distance > threshold) {  //touch swipe left (next)
    goToSlide(currentIndex + 1);
  } 
    else if (distance < -threshold) {  //touch swipe right (previous)
    goToSlide(currentIndex - 1);
  }
  };

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    swipeFinger();
  });

  //keyboard
  gallery.setAttribute('tabindex', '0');
  gallery.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1); 
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
  });

  goToSlide(0);
}
