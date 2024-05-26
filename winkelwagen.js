document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const totalAmountElement = document.getElementById('totalAmount');

    function updateCartDisplay() {
        // Verwijder eerst alle items uit de winkelwagen container
        cartItemsContainer.innerHTML = '';

        if (cartItems.length > 0) {
            emptyCartMessage.style.display = 'none';
            let totalAmount = 0;
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                const price = parseFloat(item.price.replace(/[^\d.-]/g, '')); // Haal alleen cijfers, punten en minnetekens op
                totalAmount += price;
                itemElement.innerHTML = `
                    <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p class="cart-item-price">${item.price}</p>
                        <button class="remove-item">Verwijder</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
            const formattedTotalAmount = formatPrice(totalAmount);
            totalAmountElement.textContent = `€ ${formattedTotalAmount}`; // Toon de geformatteerde totaalprijs
        } else {
            // Toon de melding dat de winkelwagen leeg is
            emptyCartMessage.style.display = 'block';
            totalAmountElement.textContent = '€ 0,00'; // Als de winkelwagen leeg is, toon een standaardbedrag van € 0,00
        }
    }

    // Functie om prijs te formatteren met spatie tussen duizendtallen en honderdtallen
    function formatPrice(price) {
        return (price / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace('.', ',');
    }

    // Update de winkelwagen weergave bij het laden van de pagina
    updateCartDisplay();

    // Event listener voor verwijderknoppen toevoegen na het toevoegen van items aan de DOM
    cartItemsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-item')) {
            const itemToRemove = event.target.closest('.cart-item');
            const index = Array.from(cartItemsContainer.children).indexOf(itemToRemove);
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCartDisplay();
        }
    });
});

