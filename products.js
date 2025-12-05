// products.js
const addToCartButtons = document.getElementsByTagName('button');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function(){
        const card = this.parentElement;
        const productName = card.querySelector('h3').innerText;
        const productPrice = parseInt(card.querySelector('p').innerText.replace('₹',''));
        const productImg = card.querySelector('img').src;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
