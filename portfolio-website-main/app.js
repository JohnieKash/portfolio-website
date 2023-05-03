// open & close navigation
const menu_hamburger = document.querySelector(".hamburger-menu");
const nav_links = document.querySelector(".nav-links");

menu_hamburger.addEventListener('click', ()=>{
 nav_links.classList.toggle('mobile-menu')
})