// Obiect global pentru funcțiile tematice
if (typeof myThemeFunctions === 'undefined') {
    window.myThemeFunctions = {};
}

// Adaugare functie setDarkMode la obiectul global
myThemeFunctions.setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
};

// Adaugare functie setLightMode la obiectul global
myThemeFunctions.setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
};

// Adaugare functie toggleTheme la obiectul global
myThemeFunctions.toggleTheme = () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
        myThemeFunctions.setLightMode();
    } else {
        myThemeFunctions.setDarkMode();
    }
};

// Functie pentru încărcarea componentei
const Loading = () => {
    const hasLocalStorage = typeof localStorage !== "undefined";
    let percentage = 0;

    // Setarea temei pe baza local storage-ului
    if (hasLocalStorage) {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            myThemeFunctions.setDarkMode();
        } else {
            myThemeFunctions.setLightMode();
        }
    }

    // Actualizarea procentajului cu interval
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage += 1;
        } else {
            clearInterval(interval);
            delayLoading();
        }
    }, 30);

    // Funcție pentru întârzierea încărcării
    const delayLoading = () => {
        const loadingElement = document.getElementById("loading");
        const contentElement = document.getElementById("content");

        if (loadingElement && contentElement) {
            console.log("Starting animation...");
            loadingElement.style.opacity = "0";
            setTimeout(() => {
                console.log("Animation completed. Showing content...");
                loadingElement.style.display = "none";
                contentElement.style.opacity = "1";
            }, 2700);
        } else {
            console.error("Error: loadingElement or contentElement not found.");
        }
    };

    // Încărcare inițială
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Document is loaded. Initiating delayLoading...");
        delayLoading();
        console.log("delayLoading initiated.");
    });

    // Render the Loading component
    return `
        <div class=" flex flex-col justify-center items-center min-h-screen ${hasLocalStorage ? 'dark-bg' : 'light-bg'}" style="background: var(--loading_bg)">
            <div class="blobs">
                <div class="blob-center" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
                <div class="blob" style="background: var(--loading_blob)"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                </defs>
            </svg>
            <h1 class="text-lg mt-10 fade-in1" style="color: var(--loading_text)">
                Developed by <span class="text-2xl font-bold">2Tek</span>
            </h1>
        </div>
    `;
};

// Render the Loading component
document.body.innerHTML = Loading();
