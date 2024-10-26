let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Handle scroll events
window.onscroll = () => {
    let top = window.scrollY; // Corrected to window.scrollY

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                // Corrected the selector
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Navbar sticky
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//  scroll reveal 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
}).reveal('.home-contact, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-contact h1, .About , .contact form', { origin: 'left' })
ScrollReveal().reveal('.home-contact p , .contact form', { origin: 'right' });


// typed js 

// const typed = new typed('.multitext', {
//     strings: ['FrontEnd Developer', 'Gamer', 'Part-time Teacher'], 
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

const typed = new typed('.multitext', {
    strings: ['FrontEnd Developer', 'Gamer', 'Part-time Teacher'], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});