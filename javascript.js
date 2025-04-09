const navIcon = document.getElementById('nav-icon4');
const rightNav = document.getElementById('rightNav');

// Store original margin
const originalMargin = getComputedStyle(navIcon).marginRight;

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open');
    rightNav.classList.toggle('open');

    if (rightNav.classList.contains('open')) {
        navIcon.style.marginRight = '250px';
    } else {
        navIcon.style.marginRight = originalMargin;
    }
});
