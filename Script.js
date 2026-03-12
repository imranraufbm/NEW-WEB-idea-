document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Optional: Animate hamburger to X
        toggle.classList.toggle('active');
    });

    // Close menu when clicking a link (optional)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
