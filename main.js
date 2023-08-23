const menuEmail = document.querySelector('.navbar-email');
const menuHamburguesa = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    //Si el Aside esta abierto, hay que cerrarlo
    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inacive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Si el mobileMenu esta abierto, hay que cerrarlo
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    //Si el desktopMenu esta abierto, hay que cerrarlo
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}