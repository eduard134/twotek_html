document.addEventListener("DOMContentLoaded", function () {
    const h1Title = document.getElementById("h1Title");
    const slide = document.getElementById("slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    if (h1Title && slide && prevButton && nextButton) {
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
            const firstSlide = slide.querySelector(".item");
            if (firstSlide) {
                slide.removeChild(firstSlide);
                slide.appendChild(firstSlide);
            }
        });

        prevButton.addEventListener("click", function () {
            const slides = slide.querySelectorAll(".item");
            const lastSlide = slides[slides.length - 1];
            if (lastSlide) {
                slide.removeChild(lastSlide);
                slide.prepend(lastSlide);
            }
        });
    } else {
        console.error("Error: One or more elements not found.");
    }
});

