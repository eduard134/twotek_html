document.addEventListener("DOMContentLoaded", function () {
    let isButtonVisible = false;
    const scrollToTopContainer = document.getElementById("scrollToTopContainer");
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 80 && !isButtonVisible) {
        scrollToTopContainer.classList.add("visible");
        scrollToTopContainer.classList.remove("hidden");
        isButtonVisible = true;
      } else if (scrollPosition <= 80 && isButtonVisible) {
        scrollToTopContainer.classList.remove("visible");
        scrollToTopContainer.classList.add("hidden");
        isButtonVisible = false;
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    document.getElementById("scrollToTopContainer").addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);
  
    // Initial check for the scroll position
    handleScroll();
  
    // Clean up event listeners on component unmount
    return () => {
      document.getElementById("scrollToTopContainer").removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", handleScroll);
    };
  });
  