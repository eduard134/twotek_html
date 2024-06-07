document.getElementById('buildLink').addEventListener('click', function () {
  document.getElementById('buildMenu').style.display = 'block';
  document.getElementById('templatesMenu').style.display = 'none';
  document.getElementById('editMenu').style.display = 'none';

});



document.getElementById('templatesLink').addEventListener('click', function () {
  document.getElementById('templatesMenu').style.display = 'block';
  document.getElementById('buildMenu').style.display = 'none';
  document.getElementById('editMenu').style.display = 'none';
});

title = document.getElementById("title")
text = document.getElementById("text")
image = document.getElementById("image")
form = document.getElementById("form")
button = document.getElementById("button")
list = document.getElementById("list")
spacer = document.getElementById("spacer")
divider = document.getElementById("divider")

main = document.getElementById("new")

nav = document.getElementById("template1")
hero = document.getElementById("template2")
blog = document.getElementById("template3")
contact = document.getElementById("template5")

product = document.getElementById("template4")
footer = document.getElementById("template6")



title.addEventListener("click", addTitle);
text.addEventListener("click", addText);
image.addEventListener("click", addImage);
form.addEventListener("click", addForm)
button.addEventListener("click", addButton)
list.addEventListener("click", addList)
spacer.addEventListener("click", addSpacer)
divider.addEventListener("click", addDivider)

nav.addEventListener("click", addNav)
hero.addEventListener("click", addHero)
blog.addEventListener("click", addBlog)
product.addEventListener("click", addProduct)
contact.addEventListener("click", addContact)
footer.addEventListener("click", addFooter)


let addedElements = [];


function addTitle() {
  const titleId = "title_" + addedElements.length;
  main.innerHTML += `<h1  contenteditable="true" class="buildTitle padding" id="${titleId}">Titlu</h1>`;
  addedElements.push({ type: 'title', id: titleId });
}

function addText() {
  const textId = "text_" + addedElements.length;
  main.innerHTML += `<div class="buildText padding" contenteditable="true" id="${textId}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi sit amet neque facilisis porta. Nullam tristique, neque rhoncus ullamcorper rutrum, mi nisl varius eros, eleifend fermentum diam nulla a orci. Phasellus finibus, massa quis interdum sagittis, dolor turpis rhoncus leo, a cursus dolor felis eget nisl. Sed dapibus hendrerit est. Quisque erat ipsum, mollis sit amet molestie non, semper sit amet risus. In lacus ipsum, commodo sit amet massa vitae, ullamcorper auctor nibh.</div>`;
  addedElements.push({ type: 'text', id: textId });
}

function addImage() {
  const imageId = addedElements.length;
  const container = document.createElement('div');
  container.classList.add('image-container');
  container.innerHTML = `
    <input type="file" class="padding" id="upload_image_${imageId}" onchange="uploadImage(event, ${imageId})">
    <div class="img-resize"  id="img-resize">
      <img id="image_${imageId}" class="resizedImg" id="resizedImg"  draggable="true">
      <div class="btn-container">
        <button id="editBtn">Editează Imaginea</button>
        <button>Șterge Imaginea</button>
      </div>
      </div>

  `;
  main.appendChild(container);
  addedElements.push({ type: "image", id: imageId });

  document.getElementById('editBtn').addEventListener('click', function () {
    document.getElementById('editMenu').style.display = 'block';
    document.getElementById('buildMenu').style.display = 'none';
    document.getElementById('templatesMenu').style.display = 'none';
  });
}

function uploadImage(event, imageId) {
  const input = event.target;
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.getElementById('image_' + imageId);
      imgElement.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function handleResize(event) {
  const imgElement = event.target;
  imgElement.style.width = event.clientX - imgElement.getBoundingClientRect().left + 'px';
}

document.addEventListener('dragstart', function (event) {
  if (event.target.classList.contains('resizable-img')) {
    event.dataTransfer.setData('text/plain', ''); 
  }
});

document.addEventListener('dragover', function (event) {
  event.preventDefault();
});

document.addEventListener('drop', function (event) {
  event.preventDefault();
  if (event.target.classList.contains('resizable-img')) {
    handleResize(event);
  }
});

function addForm() {
  const formId = "form_" + addedElements.length;
  main.innerHTML += `
    <div id="${formId}" class="padding">
  <div contenteditable="true">Prenume:</div>
  <input type="text" id="fname" name="Ion" class="buildForm"><br>
  <div contenteditable="true" >Nume:</div>
  <input type="text" id="lname" name="Popescu" class="buildForm"><br>
  <button contenteditable="true" class="buildFormBtn">Trimite</button>
  </div> 
    `;
  addedElements.push({ type: "form", id: formId })
}

function addButton() {
  const buttonId = "button_" + addedElements.length;
  main.innerHTML += `
  <div class="padding">
    <button id="${buttonId}" contenteditable="true" class="buildBtn">Apasă-mă!</button>
    </div>
    `;
  addedElements.push({ type: "button", id: buttonId })
}

function addList() {
  const listId = "list_" + addedElements.length;
  main.innerHTML += `
    <ul id="${listId}" contenteditable class="padding">
      <li>Cafea</li>
      <li>Ceai</li>
      <li>Lapte</li>
    </ul>  
    `;
  addedElements.push({ type: "list", id: listId })
}

function addSpacer() {
  const spacerId = "spacer_" + addedElements.length;
  main.innerHTML += `
    <div id="${spacerId}" style="height: 150px;" class="padding"></div>
    `;
  addedElements.push({ type: "spacer", id: spacerId })
}

function addDivider() {
  const dividerId = "divider_" + addedElements.length;

  main.innerHTML += `
    <hr id="${dividerId}" class="padding" />
    `;
  addedElements.push({ type: "divider", id: dividerId })
}


function undo() {
  if (addedElements.length > 0) {
    const lastElement = addedElements.pop();
    const elementToRemove = document.getElementById(lastElement.id);
    if (elementToRemove) {
      elementToRemove.remove();
    } else {
      console.error("Element not found to remove:", lastElement);
    }
  } else {
    alert("Nothing to undo.");
  }
}

document.getElementById("undo").addEventListener("click", undo);



function addNav() {
  const navId = "nav_" + addedElements.length;
  main.innerHTML += `
    <header id="${navId}" class="text-gray-600 body-font">
    <div class="w-[83.5vw] container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center mb-4 md:mb-0">
        <span class="text-xl" contenteditable="true">LOGO</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-400" contenteditable="true">Link 1</a>
        <a class="mr-5 hover:text-gray-400" contenteditable="true">Link 2</a>
        <a class="mr-5 hover:text-gray-400" contenteditable="true">Link 3</a>
        <a class="mr-5 hover:text-gray-400" contenteditable="true">Link 4</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" contenteditable="true">Buton
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
    `;
  addedElements.push({ type: "nav", id: navId })
}


function addHero() {
  const heroId = "hero_" + addedElements.length;
  main.innerHTML += `<section id="${heroId}" class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" contenteditable="true">Lorem ipsum dolor sit amet</h1>
        <p class="mb-8 leading-relaxed" contenteditable="true">Cras viverra odio faucibus hendrerit fringilla. Vivamus auctor dolor ex, fringilla dapibus velit luctus quis. Etiam feugiat at dolor eu dapibus.</p>
        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field" class="leading-7 text-sm text-gray-600" contenteditable="true">Placeholder</label>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" contenteditable="true">Button</button>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-full" contenteditable="true"> Etiam feugiat at dolor eu dapibus.</p>
        <div class="flex lg:flex-row md:flex-col">
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">DESCARCĂ PE</span>
              <span class="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">Descarcă pe</span>
              <span class="title-font font-medium">App Store</span>
            </span>
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div>
    </div>
  </section>`;
  addedElements.push({ type: "hero", id: heroId })
}

function addBlog() {
  const blogId = "blog_" + addedElements.length;
  main.innerHTML += `<section id="${blogId}" class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" contenteditable="true">CATEGORIE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3" contenteditable="true">Lorem Ipsum</h1>
              <p class="leading-relaxed mb-3" contenteditable="true">Cras est mauris, semper at odio ac, pellentesque tristique massa. Sed pharetra malesuada dictum.</p>
              <div class="flex items-center flex-wrap ">
                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" contenteditable="true">Citește mai mult 
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" contenteditable="true">CATEGORIE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3" contenteditable="true">Lorem Ipsum</h1>
              <p class="leading-relaxed mb-3" contenteditable="true">Cras est mauris, semper at odio ac, pellentesque tristique massa. Sed pharetra malesuada dictum.</p>
              <div class="flex items-center flex-wrap">
                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" contenteditable="true">Citește mai mult
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" contenteditable="true">CATEGORIE</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3" contenteditable="true">Lorem Ipsum</h1>
              <p class="leading-relaxed mb-3" contenteditable="true">Cras est mauris, semper at odio ac, pellentesque tristique massa. Sed pharetra malesuada dictum.</p>
              <div class="flex items-center flex-wrap ">
                <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" contenteditable="true">Citește mai mult
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  addedElements.push({ type: "blog", id: blogId })
}

function addProduct() {
  const productId = "product_" + addedElements.length;
  main.innerHTML += `<section id="${productId}" class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest" contenteditable="true">COMPANIE</h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" contenteditable="true">Lorem ipsum dolor sit</h1>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span class="text-gray-600 ml-3">4 Review-uri</span>
            </span>
            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed" contenteditable="true">Curabitur hendrerit vulputate sapien, quis vehicula ligula iaculis non. Cras in eros eget urna varius sagittis pellentesque at mauris. Ut rhoncus magna vestibulum enim placerat euismod. Duis purus urna, bibendum a lacus id, faucibus dapibus ipsum. Morbi malesuada velit tortor, volutpat rutrum neque dignissim quis.</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Culoare</span>
              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button class="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div class="flex ml-6 items-center">
              <span class="mr-3">Mărime</span>
              <div class="relative">
                <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900" contenteditable="true">199.00 Lei</span>
            <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" contenteditable="true">Buton</button>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  addedElements.push({ type: "product", id: productId })
}

function addContact() {
  const contactId = "contact_" + addedElements.length;
  main.innerHTML += `<section id="${contactId}" class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22047932.36293794!2d1.0166928591093078!3d47.57950036308214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2s!4v1711547975055!5m2!1sen!2s" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs" contenteditable="true">ADRESĂ</h2>
            <p class="mt-1" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs" contenteditable="true">EMAIL</h2>
            <a class="text-blue-500 leading-relaxed" contenteditable="true">example@email.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4" contenteditable="true">TELEFON</h2>
            <p class="leading-relaxed" contenteditable="true">123-456-7890</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font" contenteditable="true">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600" contenteditable="true">Nume</label>
          <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600" contenteditable="true">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Mesaj</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" contenteditable="true">Buton</button>
        <p class="text-xs text-gray-500 mt-3" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </section>`;
  addedElements.push({ type: "contact", id: contactId })
}

function addFooter() {
  const footerId = "footer_" + addedElements.length;
  main.innerHTML += `<footer id="${footerId}" class="text-gray-600 body-font">
    <div class="w-[83.5vw] container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span class="text-xl" contenteditable="true">Logo</span>
        </a>
        <p class="mt-2 text-sm text-gray-500" contenteditable="true">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" contenteditable="true">CATEGORII</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 1</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 2</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 3</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 4</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" contenteditable="true">CATEGORII</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 1</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 2</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 3</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 4</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" contenteditable="true">CATEGORII</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 1</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 2</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 3</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 4</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" contenteditable="true">CATEGORII</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 1</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 2</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 3</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800" contenteditable="true">Link 4</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left" contenteditable="true">© 2024 TwoTek 
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>`;
  addedElements.push({ type: "footer", id: footerId })
}

function editImage() {
  const imgCenter = document.getElementById("img-center");

  imgCenter.style.justifyContent = 'center';
  imgCenter.style.alignItems = 'center';

  const alignLeftBtn = document.getElementById("align-left");
  const alignRightBtn = document.getElementById("align-right");

  alignLeftBtn.removeEventListener("click", alignLeft);
  alignRightBtn.removeEventListener("click", alignRight);

  alignLeftBtn.addEventListener("click", alignLeft);
  alignRightBtn.addEventListener("click", alignRight);

  function alignLeft() {
    imgCenter.style.justifyContent = 'flex-start'; 
  }

  function alignRight() {
    imgCenter.style.justifyContent = 'flex-end';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const editBtn = document.getElementById('editBtn');
  if (editBtn) {
    editBtn.addEventListener('click', editImage);
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const buildMenu = document.getElementById('buildMenu');
  const buildLink = document.getElementById('buildLink');
  const templatesLink = document.getElementById('templatesLink');
  const templatesMenu = document.getElementById('templatesMenu');

  
  buildLink.addEventListener('click', function() {
      if (buildMenu.classList.contains('show')) {
          buildMenu.classList.remove('show');
          buildMenu.classList.add('hide');
      } else {
          buildMenu.classList.remove('hide');
          buildMenu.classList.add('show');
      }
  });

  templatesLink.addEventListener('click', function() {
    if (templatesMenu.classList.contains('show')) {
        templatesMenu.classList.remove('show');
        templatesMenu.classList.add('hide');
    } else {
        templatesMenu.classList.remove('hide');
        templatesMenu.classList.add('show');
    }
});
});
