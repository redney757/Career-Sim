const navIcon = document.getElementById('nav-icon4');
const rightNav = document.getElementById('rightNav');
const mobileNav = document.getElementById('mobileNavList');
const clickShowLabel = document.getElementById('clickShowLabel');
const clickReset = document.getElementById('clickReset');
const clickShow = document.getElementById('clickShow');

// Store original margin
const originalMargin = getComputedStyle(navIcon).marginRight;
console.log("Hello world")
navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open');
    rightNav.classList.toggle('open');
    mobileNav.classList.toggle('open');
    if (rightNav.classList.contains('open')) {
        navIcon.style.marginRight = '250px';
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

clickShowLabel.addEventListener('click', () =>{
    const p1Text = document.getElementById('p1Text')
    if (p1Text.style.opacity ==  0) {
        clickShowLabel.style.display = 'none';
        p1Text.style.opacity = 1;
        clickReset.style.display = 'block';

    }
    

})
clickReset.addEventListener('click', () =>{
    const p1Text = document.getElementById('p1Text')
    if (p1Text.style.opacity ==  1) {
        clickShowLabel.style.display = 'block';
        p1Text.style.opacity = 0;
        clickReset.style.display = 'none';
        
    }
    

})
clickReset.addEventListener('mouseover', () =>{
    clickReset.style.transform = 'scale(0.9)';
    clickReset.style.transition = 'all 0.2s ease'

})
clickReset.addEventListener('mouseout', () =>{
    clickReset.style.transform = 'scale(1)';
    clickReset.style.transition = 'all 0.2s ease'


})
clickShow.addEventListener('mouseover', () =>{
    clickShow.style.transform = 'scale(0.9)';
    clickShow.style.transition = 'all 0.2s ease'

})
clickShow.addEventListener('mouseout', () =>{
    clickShow.style.transform = 'scale(1)';
    clickShow.style.transition = 'all 0.2s ease'


})