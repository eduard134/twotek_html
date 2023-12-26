document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopContainer = document.getElementById("scrollToTopContainer");

    if (scrollToTopContainer) {
      let isButtonVisible = false;

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

      scrollToTopContainer.addEventListener("click", scrollToTop);
      window.addEventListener("scroll", handleScroll);

      // Initial check for the scroll position
      handleScroll();

      // Log success message
      console.log("Scroll Up functionality initialized successfully.");

      // Clean up event listeners on component unmount
      return () => {
        scrollToTopContainer.removeEventListener("click", scrollToTop);
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.error("Error: ScrollToTopContainer element not found.");
    }
  });