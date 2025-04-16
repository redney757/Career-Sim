console.log('hello world')
document.addEventListener("DOMContentLoaded", () => {
    const navIcon = document.getElementById('nav-icon4');
    const rightNav = document.getElementById('rightNav');
    const mobileNav = document.getElementById('mobileNavList');
    const clickShowLabel = document.getElementById('clickShowLabel');
    const clickReset = document.getElementById('clickReset');
    const clickShow = document.getElementById('clickShow');
    const p1Text = document.getElementById('p1Text');
    const form = document.querySelector('#form');
    const submitButton = document.querySelector('#submit');
    const linkedin = document.getElementById('linked');
    const instagram = document.getElementById('instagram');
    const facebook = document.getElementById('facebook');
    const twitter = document.getElementById('twitter');
    const originalMargin = navIcon ? getComputedStyle(navIcon).marginRight : "0px";
    const originalPadding = clickShow ? getComputedStyle(clickShow).padding : "15px";
    const successLocation = window.location.origin + '/success.html';

    if (navIcon && rightNav && mobileNav) {
        navIcon.addEventListener('click', () => {
            navIcon.classList.toggle('open');
            rightNav.classList.toggle('open');
            mobileNav.classList.toggle('open');
            navIcon.style.marginRight = rightNav.classList.contains('open') ? '250px' : originalMargin;
        });

        window.addEventListener('click', (event) => {
            if (rightNav.classList.contains('open') &&
                !navIcon.contains(event.target) &&
                !rightNav.contains(event.target)) {
                navIcon.classList.remove('open');
                rightNav.classList.remove('open');
                mobileNav.classList.remove('open');
                navIcon.style.marginRight = originalMargin;
            }
        });
    }

    if (clickShowLabel && clickReset && clickShow && p1Text) {
        clickShowLabel.addEventListener('click', () => {
            if (p1Text.style.opacity == 0 || p1Text.style.opacity === "") {
                clickShowLabel.style.display = 'none';
                p1Text.style.opacity = 1;
                clickReset.style.display = 'block';
            }
        });

        clickReset.addEventListener('click', () => {
            if (p1Text.style.opacity == 1) {
                clickShowLabel.style.display = 'block';
                p1Text.style.opacity = 0;
                clickReset.style.display = 'none';
            }
        });

        clickReset.addEventListener('mouseover', () => {
            clickReset.style.transform = 'scale(0.9)';
            clickReset.style.transition = 'all 0.2s ease';
        });

        clickReset.addEventListener('mouseout', () => {
            clickReset.style.transform = 'scale(1)';
            clickReset.style.transition = 'all 0.2s ease';
        });

        clickShow.addEventListener('mouseover', () => {
            clickShow.style.padding = '20px';
            clickShow.style.transition = 'all 0.2s ease';
        });

        clickShow.addEventListener('mouseout', () => {
            clickShow.style.padding = originalPadding;
            clickShow.style.transition = 'all 0.2s ease';
        });
    }
    if (form && submitButton) {
        form.addEventListener('submit', (e) => {
            submitButton.disable = true;
            e.preventDefault();
            window.location.href = window.location.origin + '/success.html';
        })
    }

    if (window.location.href == successLocation) {
        setTimeout(() => {
            window.location.href = window.location.origin
          }, 5000)
          console.log('redirecting')
    }
    if (instagram && facebook && twitter && linkedin) {
        instagram.addEventListener('click', () => {
            window.open('https://instagram.com')
            
        })
        linkedin.addEventListener('click', () => {
            window.open('https://linkedin.com')


        })
        twitter.addEventListener('click', () => {
            window.open('https://twitter.com')


        })
        facebook.addEventListener('click', () => {
            window.open('https://facebook.com')


        })
    }

});
