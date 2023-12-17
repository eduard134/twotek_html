
function createTranslationComponent() {
  const translateContainer = document.getElementById("translate");
  const languages = ["ro", "ru", "en"];
  let currentLanguage = localStorage.getItem("selectedLanguage") || "ro";

  function setLanguage(newLanguage) {
    currentLanguage = newLanguage;
    localStorage.setItem("selectedLanguage", newLanguage);
    updateUI();
  }

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("active");
  }

  function handleLanguageChange(newLanguage) {
    setLanguage(newLanguage);
  }

  function updateUI() {
    const languageText = document.getElementById("languageText");
    languageText.textContent = getLanguageName(currentLanguage);

    const dropdownOptions = document.querySelectorAll(".language-option");
    dropdownOptions.forEach((option) => {
      option.style.display =
        option.getAttribute("data-language") !== currentLanguage
          ? "block"
          : "none";
    });
  }

  function getLanguageName(language) {
    const translations = {
      ro: "Română",
      ru: "Русский",
      en: "English",
    };
    return translations[language] || language;
  }

  translateContainer.innerHTML = `
    <div class="relative">
      <div id="toggleButton" class="flex items-center justify-between sm:px-4 lg:px-3 px-3 py-2 rounded-full cursor-pointer" onclick="toggleDropdown()" style="min-height: 40px; color: var(--translate_color); background: var(--translate_bg);">
        <span id="languageText" style="color: var(--translate_lang_color);"></span>
        <svg id="arrowIcon" class="h-4 w-4 ml-2 lg:ml-0 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="var(--arrow)">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </div>

      <div id="dropdownMenu" class="absolute mt-2 lg:w-40 h-20 lg:h-20 w-32 rounded-lg overflow-hidden z-10 transform origin-top transition-transform duration-300" style="background: var(--translate_bg); box-shadow: 0px 3px 10px var(--translate_shadow);">
        <ul class="divide-y flex flex-col" style="border-color: var(--translate_line);">
          ${languages
            .map(
              (language) => `
            <li class="ul1 language-option" data-language="${language}" onclick="handleLanguageChange('${language}')" style="color: var(--translate_lang_color);">${getLanguageName(
                language
              )}</li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;

  updateUI();
}

createTranslationComponent();
