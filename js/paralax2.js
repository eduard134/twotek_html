document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.0001,
  };

  const observer1 = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add('isVisible');
      observer1.unobserve(entry.target);
    }
  }, observerOptions);

  const observer2 = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add('isVisible');
      observer2.unobserve(entry.target);
    }
  }, observerOptions);

  const observer3 = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      entry.target.classList.add('isVisible');
      observer3.unobserve(entry.target);
    }
  }, observerOptions);

  if (document.querySelector('.element1')) {
    observer1.observe(document.querySelector('.element1'));
  }

  if (document.querySelector('.element2')) {
    observer2.observe(document.querySelector('.element2'));
  }

  if (document.querySelector('.element3')) {
    observer3.observe(document.querySelector('.element3'));
  }
});