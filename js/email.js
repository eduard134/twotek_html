document.addEventListener("DOMContentLoaded", function () {
  const h1Ref = document.getElementById("h1Ref");
  const emailForm = document.getElementById("emailForm");
  let isVisible2 = false;
  let hasAnimated = false;

  // Verifică dacă există elementul cu id-ul "h1Ref"
  if (h1Ref) {
    const handleIntersection = (entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        // Perform actions when the element is in view
        if (entry.target.id === "h1Ref") {
          isVisible2 = true;
        }
        setHasAnimated(true);
        observer.unobserve(entry.target);
      }
    };

    const h1Observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    h1Observer.observe(h1Ref);
  } else {
    console.error("Error: h1Ref element not found.");
  }

  // Verifică dacă există elementul cu id-ul "emailForm"
  if (emailForm) {
    // Additional logic for animations and state management
    // ...
  } else {
    console.error("Error: EmailForm element not found.");
  }

  function setHasAnimated(value) {
    hasAnimated = value;
  }

  // You may need to handle animation and other logic accordingly
});
