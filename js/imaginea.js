document.addEventListener("DOMContentLoaded", function () {
    const h1Title = document.getElementById("h1Title");
    const slide = document.getElementById("slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let isVisible1 = false;

    const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            isVisible1 = true;
            h1Observer.unobserve(h1Title);
        }
    });
    h1Observer.observe(h1Title);

    nextButton.addEventListener("click", function () {
        if (slide) {
            const firstSlide = slide.querySelector(".item");
            slide.removeChild(firstSlide);
            slide.appendChild(firstSlide);
        }
    });

    prevButton.addEventListener("click", function () {
        if (slide) {
            const slides = slide.querySelectorAll(".item");
            const lastSlide = slides[slides.length - 1];
            slide.removeChild(lastSlide);
            slide.prepend(lastSlide);
        }
    });
});
