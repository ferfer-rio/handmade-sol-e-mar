/**
 * SISTEMA FÉRFER - LÓGICA DE INTERFACE RESTAURADA
 */

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPos > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (scrollPos > (windowHeight / 2)) {
        header.classList.add('halfway');
    } else {
        header.classList.remove('halfway');
    }
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            const parent = header.parentElement;
            document.querySelectorAll('.accordion').forEach(acc => {
                if (acc !== parent) acc.classList.remove('active');
            });
            parent.classList.toggle('active');
        }
    });
});

// LÓGICA DO MENU MODAL (Substituindo o Alert)
const menuBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const menuOverlay = document.getElementById('mobile-menu-overlay');

if (menuBtn) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuOverlay.classList.add('active');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
    });
}

// LÓGICA DE BUSCA
const searchInput = document.getElementById('search-input');
const filterProducts = (term) => {
    const query = term.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.getAttribute('data-name') || "";
        card.style.display = name.includes(query) ? "block" : "none";
    });
};

searchInput?.addEventListener('input', (e) => filterProducts(e.target.value));

document.getElementById('mobile-search-trigger')?.addEventListener('click', (e) => {
    e.preventDefault();
    const term = prompt("O que você busca na Férfer?");
    if (term) filterProducts(term);
});

console.log("Interface Férfer restaurada com sucesso.");
