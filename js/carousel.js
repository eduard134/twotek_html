function createCarousel() {
  const container = document.createElement("div");
  container.id = "carousel";
  container.className =
    "mt-24 sm:mt-44 lg:mt-32 mb-10 lg:mb-20 flex-col justify-evenly mx-2 lg:mx-32 items-center";

  const title = document.createElement("h1");
  title.className =
    "text-center text-2xl sm:text-5xl lg:text-4xl mb-5 sm:mb-7 font-semibold tracking-in-expand-fwd-top";
  title.textContent = "Your Carousel Title";
  title.style.color = "var( --carousel_h1)";
  container.appendChild(title);

  const hr = document.createElement("hr");
  hr.className =
    "h-1 rounded-xl flex justify-center items-center mb-5 mx-[12vw] sm:mb-7 lg:mx-[25vw] tracking-in-expand";
  hr.style.background = "var(--carousel_hr)";
  container.appendChild(hr);

  const text = document.createElement("p");
  text.className =
    "sm:text-2xl lg:text-xl text-center sm:mx-[8vw] lg:mx-[19vw] tilt-in-left-1";
  text.textContent = "Your carousel text goes here.";
  text.style.color = "var(--carousel_h1)";
  container.appendChild(text);

  const logoSliderContainer = document.createElement("div");
  logoSliderContainer.className = "logo-slider-container tilt-in-right-2";

  const logoSlider = document.createElement("div");
  logoSlider.className = "logo-slider";
  logoSlider.id = "logoSlider";
  logoSliderContainer.appendChild(logoSlider);

  container.appendChild(logoSliderContainer);

  return container;
}

function populateLogoSlider() {
  const logoData = [
    {
      src: "images/sanduta.png",
      darkSrc: "images/sanduta-dark.png",
      link: "https://sandutart.vercel.app/",
    },
    {
      src: "images/buffy.png",
      darkSrc: "images/buffy-dark.png",
      link: "https://admin090609.github.io/",
    },
    {
      src: "images/a&d.png",
      darkSrc: "images/a&d-dark.png",
      link: "https://adfitness.vercel.app/",
    },
    {
      src: "images/apisudex.png",
      darkSrc: "images/apisudex-dark.png",
      link: "https://apisudex.store/",
    },

  ];

  const logoSlider = document.getElementById("logoSlider");
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Create initial slides
  logoData.forEach(createAndAppendLogoSlide);

  // Clone and append slides for infinite carousel
  const initialSlides = document.querySelectorAll(".logo-slide");
  initialSlides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    logoSlider.appendChild(clone);
  });

  // Set up event listeners for mouse enter and mouse leave
  document.querySelectorAll(".logo-slide").forEach((slide) => {
    slide.addEventListener("mouseenter", handleMouseEnter);
    slide.addEventListener("mouseleave", handleMouseLeave);
  });

  // Set up animation
  const animationDuration = 16; // Adjust the duration as needed
  logoSlider.style.animation = `scroll ${animationDuration}s linear infinite`;
  logoSlider.addEventListener("animationiteration", handleAnimationIteration);

  function createAndAppendLogoSlide(logo, index) {
    const logoSlide = document.createElement("div");
    logoSlide.className = "logo-slide";

    const logoLink = document.createElement("a");
    logoLink.href = logo.link;
    logoLink.target = "_blank";

    const logoImage = document.createElement("img");
    logoImage.src = isDarkMode ? logo.darkSrc : logo.src;
    logoImage.alt = "";
    logoImage.className = "w-100 h-100 object-contain"; // Adjust width, height, and other classes as needed

    logoLink.appendChild(logoImage);
    logoSlide.appendChild(logoLink);
    logoSlider.appendChild(logoSlide);
  }
}

function handleMouseEnter() {
  setIsAnimationPaused(true);
}

function handleMouseLeave() {
  setIsAnimationPaused(false);
}

function handleAnimationIteration() {
  setIsAnimationPaused(false);
}

let isAnimationPaused = false;

function setIsAnimationPaused(value) {
  isAnimationPaused = value;
  document.querySelectorAll(".logo-slider").forEach((slider) => {
    slider.style.animationPlayState = isAnimationPaused ? "paused" : "running";
  });
}

document.body.appendChild(createCarousel());
populateLogoSlider();