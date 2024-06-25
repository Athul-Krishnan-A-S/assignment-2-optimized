function toggleMenu(){
    const menu = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.dropdown-navbar');
    menu.classList.toggle('open');
    dropdown.classList.toggle('open');
}