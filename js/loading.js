// Add event listeners for dark mode, light mode, and theme toggle
const setDarkMode = () => {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
};

const setLightMode = () => {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
};

const toggleTheme = () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
        setLightMode();
    } else {
        setDarkMode();
    }
};

const delayLoading = () => {
    setTimeout(() => {
        // Adaugă aici codul pentru a înlocui pagina de încărcare cu conținutul
        document.getElementById("loading").style.display = "none"; // Ascunde pagina de încărcare
        // Adaugă codul pentru a afișa conținutul real al paginii
        // Exemplu: document.getElementById("content").style.display = "block";
    }, 2000); // 2000 milisecunde = 2 secunde
};

// Loading component
const Loading = () => {
    const hasLocalStorage = typeof localStorage !== "undefined";
    let percentage = 0;

    // Set theme based on local storage
    if (hasLocalStorage) {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            setDarkMode();
        } else {
            setLightMode();
        }
    }

    // Update percentage with interval
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage += 1;
        } else {
            clearInterval(interval);
            delayLoading();
        }
    }, 30);

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
