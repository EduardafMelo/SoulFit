document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.nav_menu_btn');
    const navWrapper = document.querySelector('.nav_links_wrapper');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', () => {
        navWrapper.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        navWrapper.classList.remove('active');
    });
});
