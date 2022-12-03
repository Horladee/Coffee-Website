let searchItem = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-items-container");
let navbar = document.querySelector(".navbar");

document.querySelector("#cart-btn").onclick = () =>{
    cartItem.classList.toggle('active')
    searchItem.classList.remove('active')
    navbar.classList.remove('active');
}

document.querySelector("#search-btn").onclick = () =>{
    searchItem.classList.toggle('active')
    cartItem.classList.remove('active')
    navbar.classList.remove('active');
}

document.querySelector("#bar-btn").onclick = () => {
    navbar.classList.toggle('active');
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');
}

document.getElementById('home').addEventListener('click', () => 
{ homeSection.scrollIntoView( {behavior : "smooth"}) 
});

document.getElementById('about').addEventListener('click', () => 
{ aboutSection.scrollIntoView( {behavior : "smooth"})
 });

document.getElementById('menu').addEventListener('click', () =>
 { menuSection.scrollIntoView( {behavior : "smooth"}) 
});

document.getElementById('products').addEventListener('click', () =>
 { productSection.scrollIntoView( {behavior : "smooth"})
 });

document.getElementById('review').addEventListener('click', () =>
 { homeSection.scrollIntoView( {behavior : "smooth"}) })

 document.getElementById('services').addEventListener('click', () =>
 { serviceSection.scrollIntoView( {behavior : "smooth"}) })

const homeSection = document.getElementById('homeSection')
const aboutSection = document.getElementById('aboutSection')
const menuSection = document.getElementById('menuSection')
const productSection = document.getElementById('productSection')
const serviceSection = document.getElementById('serviceSection')
