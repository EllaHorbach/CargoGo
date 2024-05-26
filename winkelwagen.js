document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;

    if (cartItems.length > 0) {
        emptyCartMessage.style.display = 'none';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <p class="cart-item-price">${item.price}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            
            const price = parseFloat(item.price.replace('€', '').replace('.', '').replace(',', '.').replace(' ', ''));
            totalAmount += price;
        });
        totalAmountElement.textContent = `€ ${totalAmount.toFixed(2).replace('.', ',')}`;
    } else {
        emptyCartMessage.style.display = 'block';
    }

    document.getElementById('checkoutButton').addEventListener('click', function () {
        alert('Afrekenen is nog niet geïmplementeerd.');
    });
});
