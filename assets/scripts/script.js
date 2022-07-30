// hide navbar and collapse links on downwards scroll
// header = 50px, nav = ~58px
window.addEventListener('scroll', hideNav);
let lastPosY = window.scrollY;
navbarHeight = 50;
const navbar = document.querySelector('nav');
const navLogo = document.getElementsByClassName('navbar-brand')[0];

function hideNav(){
    if (window.scrollY > navbarHeight){
        if (lastPosY < window.scrollY){
            navbar.classList.add('hide-nav');
            document.getElementsByClassName('navbar-collapse')[0].classList.remove('show');
            console.log('scroll: ' + window.scrollY);
        }
        else{ navbar.classList.remove('hide-nav'); }
        lastPosY = window.scrollY;
    }
}

const searchElement = document.getElementsByClassName('searchIcon')[0];
const logInElement = document.getElementsByClassName('logInIcon')[0];
searchElement.addEventListener("click", logInElement.classList.remove('show'));
logInElement.addEventListener("click", searchElement.classList.remove('show'));