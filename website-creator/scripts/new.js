// Change between "Build" and "Templates" menu
document.getElementById('buildLink').addEventListener('click', function() {
    document.getElementById('buildMenu').style.display = 'block';
    document.getElementById('templatesMenu').style.display = 'none';
});

document.getElementById('templatesLink').addEventListener('click', function() {
    document.getElementById('templatesMenu').style.display = 'block';
    document.getElementById('buildMenu').style.display = 'none';
});

// Declaring variables
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

// Adding events
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


let addedElements = [];


// Functions for the build menu
function addTitle() {
    const titleId = "title_" + addedElements.length; 
    main.innerHTML += `<h1  contenteditable="true" id="${titleId}">Title</h1>`;
    addedElements.push({ type: 'title', id: titleId }); 
}

function addText() {
    const textId = "text_" + addedElements.length; 
    main.innerHTML += `<div contenteditable="true" id="${textId}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi sit amet neque facilisis porta. Nullam tristique, neque rhoncus ullamcorper rutrum, mi nisl varius eros, eleifend fermentum diam nulla a orci. Phasellus finibus, massa quis interdum sagittis, dolor turpis rhoncus leo, a cursus dolor felis eget nisl. Sed dapibus hendrerit est. Quisque erat ipsum, mollis sit amet molestie non, semper sit amet risus. In lacus ipsum, commodo sit amet massa vitae, ullamcorper auctor nibh.</div>`;
    addedElements.push({ type: 'text', id: textId }); 
}

function addImage() {
    const imageId = "image_" + addedElements.length;
    main.innerHTML += `
    <img id="${imageId}" src="/website-creator/images/notLoaded.jpg" width="300px" >
    `;
    addedElements.push({type: "image", id: imageId})
}

function addForm() {
    const formId = "form_" + addedElements.length;
    main.innerHTML += `
    <div id="${formId}">
  <div contenteditable="true">First name:</div>
  <input type="text" id="fname" name="fname"><br>
  <div contenteditable="true">Last name:</div>
  <input type="text" id="lname" name="lname"><br><br>
  <button contenteditable="true">Submit</button>
  </div> 
    `;
    addedElements.push({type: "form", id: formId})
}

function addButton() {
    const buttonId = "button_" + addedElements.length;
    main.innerHTML += `
    <button id="${buttonId}" contenteditable="true">Click Me!</button>
    `;
    addedElements.push({type: "button", id: buttonId})
}

function addList() {
    const listId = "list_" + addedElements.length;
    main.innerHTML += `
    <ul id="${listId}" contenteditable="true">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  
    `;
    addedElements.push({type: "list", id: listId})
}

function addSpacer() {
    const spacerId = "spacer_" + addedElements.length;
    main.innerHTML += `
    <div id="${spacerId}" style="height: 150px;"></div>
    `;
    addedElements.push({type: "spacer", id: spacerId})
}

function addDivider() {
    const dividerId = "divider_" + addedElements.length;

    main.innerHTML += `
    <hr id="${dividerId}"/>
    `;
    addedElements.push({type: "divider", id: dividerId})
}


// Function for removing the last element added
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


// Functions for the templates 

function addNav(){
    const navId = "nav_" + addedElements.length;
    main.innerHTML += `
    <header id="${navId}" class="text-gray-600 body-font">
    <div class="w-[83.5vw] container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl " contenteditable="true">LOGO</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white" contenteditable="true">First Link</a>
        <a class="mr-5 hover:text-white" contenteditable="true">Second Link</a>
        <a class="mr-5 hover:text-white" contenteditable="true">Third Link</a>
        <a class="mr-5 hover:text-white" contenteditable="true">Fourth Link</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" contenteditable="true">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
    `;
    addedElements.push({type: "nav", id: navId})
}


function addHero(){
    const heroId = "hero_" + addedElements.length;
    main.innerHTML+=`<section id="${heroId}" class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
        <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
        <div class="flex lg:flex-row md:flex-col">
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span class="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">Download on the</span>
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
  addedElements.push({type: "hero", id: heroId})
}