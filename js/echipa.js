// echipa.js

document.addEventListener('DOMContentLoaded', function () {
  const person1 = document.getElementById('person1');
  const person2 = document.getElementById('person2');

  // Replace the following logic with your actual IntersectionObserver or other animation logic
  function handleIntersection(ref) {
    if (ref) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Add your logic for when the element is intersecting
          console.log(`${ref.id} is now visible`);
          observer.unobserve(ref);
        }
      });
      observer.observe(ref);
    }
  }

  handleIntersection(person1);
  handleIntersection(person2);
});
