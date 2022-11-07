'use strict'
// Navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if (window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
} else {
    navbar.classList.remove('navbar--dark');
}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link==null){
        return;
    }
    scrollIng(link);
});
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',()=>{
    scrollIng('#contact');
})

function scrollIng(selection){
    const scrollTo = document.querySelector(selection);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}
// home
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity= 1-(window.scrollY/homeHeight);
});