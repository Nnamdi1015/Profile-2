console.log("javascript ");

// --- DARK MODE LOGIC ---
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const html = document.documentElement;

function applyTheme(isDark) {
    if (isDark) {
        html.classList.add('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        localStorage.setItem('color-theme', 'dark');
    } else {
        html.classList.remove('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
        localStorage.setItem('color-theme', 'light');
    }
}

const localTheme = localStorage.getItem('color-theme');
const systemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localTheme === 'dark' || (!localTheme && systemThemeDark)) {
    applyTheme(true);
} else {
    applyTheme(false);
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    applyTheme(!isDark);
});

// --- MOBILE MENU LOGIC ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


//skills data
const toolsData = [
    {
        "name": "HTML",
        "img_alt": "HTML5",
        "img_src": "./images/html.png",
        "bg_color": "bg-[#E34F26]"
    },
    {
        "name": "CSS",
        "img_alt": "CSS3",
        "img_src": "./images/css.jpg",
        "bg_color": "bg-[#1572B6]"
    },
    {
        "name": "JS",
        "img_alt": "JavaScript",
        "img_src": "./images/javascript.png",
        "bg_color": "bg-[#F7DF1E]"
    },
    {
        "name": "TAILWINDCSS",
        "img_alt": "TAILWINDCSS",
        "img_src": "./images/tailwindcss.png",
        "bg_color": "bg-[#06B6D4]"
    }
]


// const skillsContainer = document.getElementById("skills-container");
// const skillsContainer = document.querySelector("skills-container");
console.log(skillsContainer);

//map over the JSON rray

const htmlData = toolsData.map((tool) => {
    return `
        <div class="flex flex-col items-center gap-3 group">
            <div
                class="w-20 h-20 rounded-full ${tool.bg_color} flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300 ring-4 ring-transparent group-hover:ring-[#06B6D4]/30">
                <img src=${tool.img_src} class="w-10 h-10" alt=${tool.img_alt}>
            </div>
            <span
                class="font-bold text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wider">${tool.name}</span>
        </div>
    `
})

// skillsContainer.innerHTML = htmlData.join('')   ;





