document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", function () {
    updateLanguage(this, ".selected-language");
    updateVerticalLanguage(this, ".selected-language-vertical");
  });
});

document.querySelectorAll(".language-option-vertical").forEach((option) => {
  option.addEventListener("click", function () {
    updateLanguage(this, ".selected-language");
    updateVerticalLanguage(this, ".selected-language-vertical");
  });
});

function updateLanguage(option, selector) {
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
}

function updateVerticalLanguage(option, selector) {
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
}

function updateLanguage(option, selector) {
  const selectedLanguage = option.getAttribute("data-value");
  const selectedText = option.textContent;
  const languageNumber = option.getAttribute("data-translate");
  document.querySelector(selector).textContent = selectedText;
  document
    .querySelector(selector)
    .setAttribute("data-translate", languageNumber);
  translatePage(selectedLanguage);
}

document
  .querySelectorAll(".language-btn, .language-btn-vertical")
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleDropdown(this);
    });
  });

function toggleDropdown(btn) {
  const dropdown = btn.nextElementSibling;
  const arrow =
    btn.querySelector(".language-arrow") ||
    btn.querySelector(".language-arrow-vertical");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    closeAllDropdowns();
    dropdown.style.display = "block";
    arrow.classList.add("rotate");
  }
}

function closeAllDropdowns() {
  document
    .querySelectorAll(".dropdown-content, .dropdown-content-vertical")
    .forEach((dropdown) => {
      dropdown.style.display = "none";
      dropdown.previousElementSibling
        .querySelector(".language-arrow")
        ?.classList.remove("rotate");
      dropdown.previousElementSibling
        .querySelector(".language-arrow-vertical")
        ?.classList.remove("rotate");
    });
}

document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".language-btn") &&
    !event.target.closest(".language-btn-vertical")
  ) {
    closeAllDropdowns();
  }
});

function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.body.classList.add("nav-scrolled");
  } else {
    document.body.classList.remove("nav-scrolled");
  }
});
