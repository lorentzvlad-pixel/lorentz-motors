// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');

    // Schimbă iconița
    const icon = this.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Închide meniul când se dă click pe un link (pe mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            document.querySelector('nav').classList.remove('active');
            document.querySelector('.mobile-menu-btn i').classList.remove('fa-times');
            document.querySelector('.mobile-menu-btn i').classList.add('fa-bars');
        }
    });
});

// Închide meniul la redimensionare ferestrei
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        document.querySelector('nav').classList.remove('active');
        document.querySelector('.mobile-menu-btn i').classList.remove('fa-times');
        document.querySelector('.mobile-menu-btn i').classList.add('fa-bars');
    }
});