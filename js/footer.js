document.addEventListener("DOMContentLoaded", function () {
  const themeFromContext = /* fetch or set your theme */ "light";
  const language = /* fetch or set your language */ "en";

  const getTranslatedContent = (lang) => {
    // Implement your translation logic here
    return {
      FooterContact: "Contact us",
      FooterRealized: "Realized by",
      FooterRights: "All rights reserved",
    };
  };

  const theme = themeFromContext;
  const hoverStates = [false, false];
  let isVisible = false;
  let isVisible2 = false;

  const handleIconHover = (index, isHovered) => {
    hoverStates[index] = isHovered;
    updateIcons();
  };

  const updateIcons = () => {
    const instagramSrc =
      theme === "dark" && hoverStates[0]
        ? "/images/instagram_hover.png"
        : theme === "dark"
        ? "/images/instagram-dark.png"
        : hoverStates[0]
        ? "/images/instagram_hover.png"
        : "/images/instagram.png";

    const tikTokSrc =
      theme === "dark" && hoverStates[1]
        ? "/images/tik-tok_hover.png"
        : theme === "dark"
        ? "/images/tik-tok-dark_hover.png"
        : hoverStates[1]
        ? "/images/tik-tok_hover.png"
        : "/images/tik-tok.png";

    const instagramImage = `<a href="https://www.instagram.com/two_2tek" class="hover:-translate-y-1 transition duration-500 ease-in-out"><img src="${instagramSrc}" alt="" width="30" height="10" class="mr-5" onmouseenter="handleIconHover(0, true)" onmouseleave="handleIconHover(0, false)"></a>`;

    const tikTokImage = `<a href="https://www.tiktok.com/@_2.tek_" class="hover:-translate-y-1 transition duration-500 ease-in-out"><img src="${tikTokSrc}" alt="" width="30" height="10" onmouseenter="handleIconHover(1, true)" onmouseleave="handleIconHover(1, false)"></a>`;

    const iconsContainer = document.getElementById("iconsContainer");
    if (iconsContainer) {
      iconsContainer.innerHTML = `
                ${instagramImage}
                ${tikTokImage}
            `;
    } else {
      console.error("Error: iconsContainer not found.");
    }
  };

  const content = getTranslatedContent(language);

  // Verifică dacă există elementul cu id-ul "footer"
  const footer = document.getElementById("footer");
  if (footer) {
    const renderFooter = () => {
      footer.innerHTML = `
                <div class="flex flex-col-reverse md:flex-row items-center md:justify-around justify-center sm:py-10 lg:p-10 text-center mb-10">
                    <div class="flex md:ml-20 mt-5 md:mb-0" id="iconsContainer"></div>
                    <div class="md:ml-20 text-sm mt-5 md:mb-0">
                        <h1 class="font-semibold">${content.FooterContact}</h1>
                        <p class="text-xs underline ">two2tek@gmail.com</p>
                    </div>
                    <div class="md:ml-20 text-sm">
                        <h1>${content.FooterRealized} <span class="font-semibold">2Tek</span></h1>
                        <p class="text-xs">© 2023 ${content.FooterRights}</p>
                    </div>
                </div>
            `;
      updateIcons();
    };

    const handleIntersection = (ref, callback) => {
      if (ref && !isVisible) {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            callback();
            isVisible = true;
            observer.unobserve(ref);
          }
        });
        observer.observe(ref);
      }
    };

    handleIntersection(document.getElementById("iconsContainer"), () => {});
    handleIntersection(document.getElementById("h1Ref"), () => {
      isVisible2 = true;
    });
    handleIntersection(document.getElementById("myRef"), () => {
      isVisible = true;
    });

    window.handleIconHover = handleIconHover;
    window.updateIcons = updateIcons;
    window.handleIntersection = handleIntersection;

    renderFooter();
  } else {
    console.error("Error: Footer element not found.");
  }
});
