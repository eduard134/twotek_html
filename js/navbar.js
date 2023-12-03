// Simplified JavaScript code for navbar logic

let nav = false;
let isMenuOpen = false;
let isBurgerMenuOpen = false;
let language = "en"; // Set your initial language

function render() {
  document.getElementById("navbar").innerHTML = `
    <div class="nav z-bug  ${nav ? "text-focus-in " : "anim1"} anim2">
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
    <div class="content1"
      style="background-image: linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3));">
      <div class="div_img text-focus-in">
        <img src="../images/logo.png" alt="Logo" width="100" height="100" class="image" />
      </div>

      <div class="bloc">
        <input
          id="checkbox2"
          type="checkbox"
          checked=${isMenuOpen}
        />
        <label
          class=" toggle2 ${isBurgerMenuOpen ? "fix" : ""}"
          for="checkbox2"
        >
          <div id="bar4" class="bars"></div>
          <div id="bar5" class="bars"></div>
          <div id="bar6" class="bars"></div>
        </label>
      </div>

      <!-- Navigation links for PC -->
      <ul class="links" style="color: var(--link_color);">
        <li class="le group  tracking-in-expand-fwd-bottom line">
          <a href="#" class="cursor-pointer" style="color: var(--link_color)">Performanță</a>
        </li>
        <li class="le group  tracking-in-expand-fwd-bottom line">
          <a href="#" class="cursor-pointer" style="color: var(--link_color)">Echipa</a>
        </li>
        <li class="le group  tracking-in-expand-fwd-bottom line">
          <a href="#" class="cursor-pointer" style="color: var(--link_color)">Proiecte</a>
        </li>
        <li class="le group  tracking-in-expand-fwd-bottom line">
          <a href="#" class="cursor-pointer" style="color: var(--link_color)">Feedback</a>
        </li>
      </ul>

      <!-- Mobile menu -->
      ${isMenuOpen ? mobileMenuContent() : ""}

      <div class="div2">
        <div class="div3">
          <!-- Add your TranslateRoToRu component or content here -->
          <select id="languageSelect">
            <option value="en">English</option>
            <option value="ro">Romanian</option>
          </select>
        </div>
        <div class="div4">
          <!-- Add your Color component here -->
          <input type="color" id="colorInput" />
        </div>
      </div>
    </div>
  `;
}

function mobileMenuContent() {
  return `
    <div class=" main_div lg-hidden-menu"
      style="background-image: linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3)); height: 101%; width: 100%; position: fixed; z-index: 2;">
      <ul class=" ul2">
        <li class=" li4">
          <img src="../images/performance.png" alt="Icon" width="94" height="94" class="img4" />
          <a href="#" onclick="closeMenu()">Performanță</a>
        </li>
        <li class=" li4">
          <img src="../images/team.png" alt="Icon" width="94" height="94" class="img4" />
          <a href="#" onclick="closeMenu()">Echipa</a>
        </li>
        <li class=" li4">
          <img src="../images/projects.png" alt="Icon" width="94" height="94" class="img4" />
          <a href="#" onclick="closeMenu()">Proiecte</a>
        </li>
        <li class=" li4">
          <img src="../images/feedback.png" alt="Icon" width="94" height="94" class="img4" />
          <a href="#" onclick="closeMenu()">Feedback</a>
        </li>
        <li class=" li5">
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
