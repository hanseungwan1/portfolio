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

const upbtn=document.querySelector('.up__btn');
upbtn.addEventListener('click',()=>{
    scrollIng('#home');
})

document.addEventListener('scroll',()=>{
    if(homeHeight/2 <window.scrollY){
        upbtn.classList.add('visible');
    } else  upbtn.classList.remove('visible');
    
});

const workBnt = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBnt.addEventListener('click',(event)=>{
    const link = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(link == null) {
        return ;
    }

// Remove selection
const active = document.querySelector('.category__btn.active');
active.classList.remove('active');
const target = event.target.nodeName === 'BUTTON' ? event.target :
                    event.target.parentNode;
target.classList.add('active');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(link ==='*' || link === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
});