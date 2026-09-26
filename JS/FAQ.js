document.querySelectorAll('.FAQ details').forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.faq-answer');
  let animation = null;
  let isClosing = false;
  let isExpanding = false;

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    details.style.overflow = 'hidden';
    
    if (isClosing || !details.open) {
      open();
    } else if (isExpanding || details.open) {
      shrink();
    }
  });

  function shrink() {
    isClosing = true;
    const startHeight = `${details.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight}px`;

    if (animation) animation.cancel();

    animation = details.animate(
      { height: [startHeight, endHeight] },
      { duration: 350, easing: 'ease-in-out' }
    );

    animation.onfinish = () => onAnimationFinish(false);
    animation.oncancel = () => (isClosing = false);
  }

  function open() {
    details.style.height = `${details.offsetHeight}px`;
    details.open = true;
    window.requestAnimationFrame(() => expand());
  }

  function expand() {
    isExpanding = true;
    const startHeight = `${details.offsetHeight}px`;
    const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

    if (animation) animation.cancel();

    animation = details.animate(
      { height: [startHeight, endHeight] },
      { duration: 350, easing: 'ease-in-out' }
    );

    animation.onfinish = () => onAnimationFinish(true);
    animation.oncancel = () => (isExpanding = false);
  }

  function onAnimationFinish(open) {
    details.open = open;
    animation = null;
    isClosing = false;
    isExpanding = false;
    details.style.height = details.style.overflow = '';
  }
});