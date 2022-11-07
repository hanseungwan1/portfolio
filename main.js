'use strict'
// Navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if (window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
    console.log('ADA');
} else {
    navbar.classList.remove('navbar--dark');
}
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click',(event)=>{
    scrollIng(event);
});
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',(event)=>{
    scrollIng(event);
})
function scrollIng(event){
    const target = event.target;
    const link = target.dataset.link;
    if (link==null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
    console.log(event.target.dataset.link);
}