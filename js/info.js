document.write(`
<div id="infoComponent" class="lg:mt-22 mt-10 lg:mt-20 text-center relative px-4 md:px-8 lg:px-0 text-focus-in">
<div class="lg:w-[70vw] mx-2 sm:mx-auto relative">
  <div class="object-cover overflow-hidden rounded-3xl h-[450px] sm:w-[100%] sm:h-[500px]">    
    <img id="imageElement" alt="" class="w-full h-full">
  </div>
  <div id="textContainer" class="absolute top-0 left-0 tracking-[.1em] right-0 bottom-0 px-5 sm:px-10 flex flex-col justify-center items-start text-white rounded-3xl text-start tracking-in-contract-bck">
    <p id="titleElement" class="sm:text-6xl text-[50px] font-semibold sm:mb-4 leading-[50px] sm:leading-[60px] py-3"></p>
    <a href="tel:+37368548789" class="text-shadow-pop-left">
      <button id="contactButton" class="sm:px-8 ml-[-8px] px-3 py-2 text-[14px] sm:text-lg sm:tracking-wider font-semibold mb-5 text-black bg-white rounded-[50px] hover:bg-opacity-70">
        Contact +373 685 487 89
      </button>
    </a>
  </div>
</div>
</div>
`);

// Additional JavaScript logic
document.addEventListener("DOMContentLoaded", function () {
  // Add your theme detection logic here
  const theme = "light"; // Replace with your theme detection logic

  // Set image source based on theme
  const lightModeImage = "/images/slider.jpg";
  const darkModeImage = "/images/image.jpg";
  const imageElement = document.getElementById("imageElement");
  imageElement.src = theme === "dark" ? darkModeImage : lightModeImage;

  // Add your language detection logic here
  const language = "ro"; // Replace with your language detection logic
  const content = getTranslatedContent(language); // Implement getTranslatedContent function

  // Set title content
  const titleElement = document.getElementById("titleElement");
  titleElement.innerHTML = `${content.LandingTitle1} <br /> ${
    content.LandingTitle2
  } <br /><span class="sm:tracking-wide text-[30px] sm:text-[45px] rounded-[50px] tracking-in-contract-bck px-3 font-light border-2 border-[#91A8B7]">${
    content.LandingTitleCircle
  }</span><br />${
    isMobile ? content.LandingTitle3Mobile : content.LandingTitle3
  }`;

  // Set up button click event
  const contactButton = document.getElementById("contactButton");
  contactButton.addEventListener("click", function () {
    window.location.href = "tel:+37368548789";

    // Log a message to the console when the button is clicked
    console.log("Button clicked!");
  });

  // Trigger animation after a short delay
  setTimeout(function () {
    const infoComponent = document.getElementById("infoComponent");
    infoComponent.classList.add(
      showComponent ? "text-focus-in" : "opacity-0",
      showComponent ? "tracking-in-contract-bck" : ""
    );
  }, 500);

  // Handle window resize
  function handleResize() {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    // Additional logic based on screen size
  }

  handleResize(); // Initial size check
  window.addEventListener("resize", handleResize);
});