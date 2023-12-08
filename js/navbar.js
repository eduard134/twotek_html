// Simplified JavaScript code for navbar logic

let nav = false;
let isMenuOpen = false;
let isBurgerMenuOpen = false;
let language = "en"; // Set your initial language

function render() {
  document.getElementById("navbar").innerHTML = `
      <div class="left-0 top-0 w-full text-focus-in mt-0 md:mt-5 text-black z-bug px-0 md:px-8 transition-all duration-1000 ease-in-out">
        ${navbarContent()}
      </div>
    `;
  addEventListeners();
}

function addEventListeners() {
  document.getElementById("checkbox2").addEventListener("change", toggleMenu);
  document
    .querySelector(".toggle-burger")
    .addEventListener("click", toggleBurgerMenu);

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", changeLanguage);
  }

  const colorInput = document.getElementById("colorInput");
  if (colorInput) {
    colorInput.addEventListener("input", changeColor);
  }
}

function navbarContent() {
  return `
      <div class="lg:max-w-[1305px] transition-all duration-300 max-w-[768px] sm:mt-4 sm:w-full flex sm:justify-around justify-evenly lg:justify-around items-center md:p-5 p-0 h-[70px] md:rounded-[70px] rounded-0 m-auto"
        style="background-image: linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3));">
        <div class="text-4xl font-bold text-focus-in flex items-center -ml-14 lg:ml-0">
          <img src="../images/logo.png" alt="Logo" width="100" height="100" class="w-[16vh]" />
        </div>

        <div class="block lg:hidden">
          <input
            id="checkbox2"
            type="checkbox"
            checked=${isMenuOpen}
          />
          <label
            class=" toggle2 ${isBurgerMenuOpen ? "fixed" : ""}"
            for="checkbox2"
          >
            <div id="bar4" class="bars"></div>
            <div id="bar5" class="bars"></div>
            <div id="bar6" class="bars"></div>
          </label>
        </div>

        <!-- Navigation links for PC -->
        <ul class="hidden lg:flex text-base font-semibold text-white" style="color: var(--link_color);">
          <li class="p-4 relative group  tracking-in-expand-fwd-bottom lin">
            <a href="#" class="cursor-pointer">Performanță</a>
          </li>
          <li class="p-4 relative group  tracking-in-expand-fwd-bottom lin">
            <a href="#" class="cursor-pointer">Echipa</a>
          </li>
          <li class="p-4 relative group  tracking-in-expand-fwd-bottom lin">
            <a href="#" class="cursor-pointer">Proiecte</a>
          </li>
          <li class="p-4 relative group  tracking-in-expand-fwd-bottom lin">
            <a href="#" class="cursor-pointer">Feedback</a>
          </li>
        </ul>

        <!-- Mobile menu -->
        ${isMenuOpen ? mobileMenuContent() : ""}

        <div class="flex items-center">
          <div class="mr-5 hidden lg:block text-focus-in">
            <!-- Add your TranslateRoToRu component or content here -->
            <select id="languageSelect">
              <option value="en">English</option>
              <option value="ro">Romanian</option>
            </select>
          </div>
          <div class="-mr-[3vw] sm:mr-0 text-focus-in">
            <!-- Add your Color component here -->
            <input type="color" id="colorInput" />
          </div>
        </div>
      </div>
    `;
}

function mobileMenuContent() {
  return `
      <div class=" lg:hidden top-0 right-0 text-white h-screen flex justify-center items-center text-center lg-hidden-menu"
        style="background-image: linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)); height: 101%; width: 100%; position: fixed; z-index: 2;">
        <ul class=" flex flex-col justify-center items-center text-center gap-4 md:text-2xl">
          <li class=" my-2 flex items-center">
            <img src="../images/performance.png" alt="Icon" width="34" height="34" class="w-8 mr-2" />
            <a href="#" onclick="closeMenu()">Performanță</a>
          </li>
          <li class=" my-2 flex items-center">
            <img src="../images/team.png" alt="Icon" width="34" height="34" class="w-8 mr-2" />
            <a href="#" onclick="closeMenu()">Echipa</a>
          </li>
          <li class=" my-2 flex items-center">
            <img src="../images/projects.png" alt="Icon" width="34" height="34" class="w-8 mr-2" />
            <a href="#" onclick="closeMenu()">Proiecte</a>
          </li>
          <li class=" my-2 flex items-center">
            <img src="../images/feedback.png" alt="Icon" width="34" height="34" class="w-8 mr-2" />
            <a href="#" onclick="closeMenu()">Feedback</a>
          </li>
          <li class=" my-2">
            <!-- Add your TranslateRoToRu component or content in mobile menu here -->
            <select id="languageSelect" onchange="changeLanguage()">
              <option value="en">English</option>
              <option value="ro">Romanian</option>
            </select>
          </li>
        </ul>
      </div>
    `;
}

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  render();
}

function closeMenu() {
  isMenuOpen = false;
  render();
}

function toggleBurgerMenu() {
  isBurgerMenuOpen = !isBurgerMenuOpen;
  render();
}

function changeLanguage() {
  // Add your logic to change the language
  console.log("Language changed");
}

function changeColor() {
  // Add your logic to change the color
  console.log("Color changed");
}

// Initial render
render();
