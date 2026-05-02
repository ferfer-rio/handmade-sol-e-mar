window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;

    // Efeito ao começar a rolar
    if (scrollPos > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Efeito de logo pequena ao passar da metade da tela
    if (scrollPos > (windowHeight / 2)) {
        header.classList.add('halfway');
    } else {
        header.classList.remove('halfway');
    }
});

// Ação do Menu Sanduíche no Mobile
document.getElementById('open-menu').addEventListener('click', function(e) {
    e.preventDefault();
    // No próximo passo criaremos o painel lateral das categorias
    alert("Menu de Categorias: Tops, Camisas, Biquínis, etc.");
});

console.log("Sistema Férfer carregado com visual Salar.");