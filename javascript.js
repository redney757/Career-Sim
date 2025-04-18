//adding a console.log to show up on everypage that has the <script> tag and references this file
console.log('hello world')
//this line of javascript adds a "listener" to the page that is loading the script. This part of the script is only ran once the page loads. I had to lay it out like this because the way i had it set up originally woudld cause elements not to work, reason being, javascript would try and run something but those elements would not be found.
document.addEventListener("DOMContentLoaded", () => {
    //This is adding all the variables for the if statements in this section of javascript and reference elements from various pages
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
    const originalMargin = navIcon ? getComputedStyle(navIcon).marginRight : "0px"; // this is to get how an element is currently styled with a specific attribute.
    const originalPadding = clickShow ? getComputedStyle(clickShow).padding : "15px";
    const successLocation = window.location.origin + '/success.html'; // this gets the url of the origin / loading page which is essentially localhost/ when making a website live, whatever you are using to host your website uses the index.html, so it does not need to be explicitly specified. With this logic we can safely find the origin url with this code and add what page we are trying to find with the string '' in this case mine was /success.html because i wanted to find the origin and add that at the end of it.
    // all if statements in this section at the top level check to see if these elements exist on the page first, if they do then the next part of the if can be ran
    if (navIcon && rightNav && mobileNav) {
        navIcon.addEventListener('click', () => {
            navIcon.classList.toggle('open');
            rightNav.classList.toggle('open');
            mobileNav.classList.toggle('open');
            //this line is essentially setting an if statement without an if statement explicitly defined. so the navIcon's margin is set equal to ( if the rightnav.classlist contains the class name open) the ? is the (if else) so if it does contain open class then the margin will be 250px otherwise the margin will be set to its original margin.
            navIcon.style.marginRight = rightNav.classList.contains('open') ? '250px' : originalMargin;
        });
        //this adds an event listener on any window that is currently loaded and listens for the 'click' event. This then passes the event attribute to the elements on the page and listens for a click, but the javascript is only checking if the rightNav contains the open class and the ! declaration ensures that the click did not happen on these elements in this case the navicon or the element itself and if all conditions are true it means the user clicked somewhere outside of these elements and can continue to run the next set of code which is programmatically removing the open class and resettign the navicon's margin.
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
