//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Activte link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('activate');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('activate');
            });
        };
    });
    //sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scorllY > 100);


    // remove toggle icon and navbar when clicked 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

    //scroll reveal
ScrollReveal({
    // reset:true,
    distance: '80px',
    duration: 2000,
    delay: 100

});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'})

ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'})




//Multple text typed js
const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Student', 'Student Developer', ' Student Computer Architect'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

