// src/main/resources/static/js/script.js
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const nav = document.getElementById('nav-content');

    if (window.scrollY > 20) {
        // Scrolled state: White glass background
        header.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-slate-200/50');
        nav.classList.replace('py-6', 'py-4');
    } else {
        // Top state: Fully transparent
        header.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-slate-200/50');
        nav.classList.replace('py-4', 'py-6');
    }
});