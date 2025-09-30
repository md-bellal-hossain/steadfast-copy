document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');

    hamburger.addEventListener('click', () => {
        navWrapper.classList.toggle('active');
    });
});
