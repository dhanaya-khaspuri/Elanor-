// home.js
// Handle "Shop Now" button
const shopNowBtn = document.querySelector('.main_btn');
shopNowBtn.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'products.html'; // Redirect to products page
});

// Handle "Add to Cart" buttons on featured products
const addToCartButtons = document.getElementsByTagName('button');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(){
        const card = this.parentElement;
        const productName = card.querySelector('h3').innerText;
        const productPrice = parseInt(card.querySelector('p').innerText.replace('₹',''));
        const productImg = card.querySelector('img').src;

        // Get existing cart from localStorage or empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product already exists in cart
        let existing = cart.find(item => item.name === productName);
        if(existing){
            existing.quantity += 1;
        } else {
            cart.push({name: productName, price: productPrice, img: productImg, quantity: 1});
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(productName + " added to cart!");
        console.log(cart);
    });
}
