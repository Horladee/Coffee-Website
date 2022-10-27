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

