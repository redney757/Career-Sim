const navIcon = document.getElementById('nav-icon4');
const rightNav = document.getElementById('rightNav');
const mobileNav = document.getElementById('mobileNavList');
// Store original margin
const originalMargin = getComputedStyle(navIcon).marginRight;

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open');
    rightNav.classList.toggle('open');
    mobileNav.classList.toggle('open');
    if (rightNav.classList.contains('open')) {
        navIcon.style.marginRight = '150px';
    } else {
        navIcon.style.marginRight = originalMargin;
        
    }
});

window.addEventListener('click', () => {
    if (rightNav.classList.contains('open') && !navIcon.contains(event.target) && !rightNav.contains(event.target)) {
        navIcon.classList.remove('open');
        rightNav.classList.remove('open');
        mobileNav.classList.remove('open');
        navIcon.style.marginRight = originalMargin;
    }
}
)
