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
        "img_src": "",
    },
    {
        "name": "CSS",
        "img_alt": "CSS3",
        "img_src": "",
    },
    {
        "name": "JS",
    },
    {
        "name": "TAILWINDCSS",
        "img_alt": "TAILWINDCSS",
        "img_src": "",
    }
]