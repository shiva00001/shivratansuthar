const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
const HOME = document.querySelector(".Home")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
HOME.classList.toggle('mobile-menu')
})

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const aboutSection = document.querySelector("#about");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY >= aboutSection.offsetTop) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
      }
    });
  });