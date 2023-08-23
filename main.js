const menuEmail = document.querySelector('.navbar-email');
const menuHamburguesa = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    //Si el Aside esta abierto, hay que cerrarlo
    if (!isAsideClosed) {
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inacive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Si el mobileMenu esta abierto, hay que cerrarlo
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    //Si el desktopMenu esta abierto, hay que cerrarlo
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Audifonos',
    price: 25,
    image: 'https://images.pexels.com/photos/4887151/pexels-photo-4887151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bicicleta',
    price: 40,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'MacBook',
    price: 2000,
    image: 'https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Taza navideña',
    price: 10,
    image: 'https://images.pexels.com/photos/3427721/pexels-photo-3427721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Oso de peluche',
    price: 15,
    image: 'https://images.pexels.com/photos/46178/teddy-bear-bear-children-toys-forest-46178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Camara de fotos',
    price: 500,
    image: 'https://images.pexels.com/photos/17894927/pexels-photo-17894927/free-photo-of-camara-colgando-correa-de-cuero-enfoque-selectivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
    for (product of arr) {
        const producCard = document.createElement('div');
        producCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
    
        const producPrice = document.createElement('p');
        producPrice.innerText= '$'+product.price;
        const producName = document.createElement('p');
        producName.innerText= product.name;
    
        producInfoDiv.appendChild(producPrice);
        producInfoDiv.appendChild(producName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        producInfo.appendChild(producInfoDiv);
        producInfo.appendChild(productInfoFigure);
    
        producCard.appendChild(productImg);
        producCard.appendChild(producInfo);
    
        cardsContainer.appendChild(producCard);
    }
}

renderProducts(productList);