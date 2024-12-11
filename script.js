var typed = new Typed('#element1', {
    strings: ['Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.','Kasif','Kasif.'],
    typeSpeed: 100,
    });
var typed = new Typed('#element2', {
    strings: ['Coder.','Programmer.','Web Developer.','Frontend Developer.','Web Designer.'],
    typeSpeed: 100,
    });

// Navbar
function toggleMenu(){

    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');

}
document.getElementById('menu-icon').addEventListener('click',toggleMenu);
