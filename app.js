document.addEventListener('DOMContentLoaded', function () {
    // Kleurselectie
    const colorSelect = document.querySelectorAll('.colour-select div');

    colorSelect.forEach(function (element) {
        element.addEventListener('click', function () {
            const color = element.id;
            changeImage(color);
        });
    });

    // Buy button voor productpagina's
    const buyButtons = document.querySelectorAll('.productButton');
    
    buyButtons.forEach(function (buyButton) {
        buyButton.addEventListener('click', function () {
            const product = {
                title: document.querySelector('.productTitel').textContent,
                price: document.querySelector('.productPrice').textContent,
                description: document.querySelector('.productDesc').textContent,
                imageSrc: document.querySelector('.productImg').src
            };

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Alert om te melden dat het product is toegevoegd
            alert('Product is toegevoegd aan het winkelwagentje!');
        });
    });
});

// Functie om de productafbeelding te veranderen op basis van de geselecteerde kleur
function changeImage(color) {
    const productImg = document.querySelector('.productImg');
    switch (color) {
        case 'blue':
            productImg.src = './img_producten/bak_fiets_blauw.jpg';
            break;
        case 'red':
            productImg.src = './img_producten/bak_fiets_rood.jpg';
            break;
        case 'white':
            productImg.src = './img_producten/bak_fiets_wit.jpg';
            break;
        case 'grey':
            productImg.src = './img_producten/long_tail_grijs.png';
            break;
        case 'bronze':
            productImg.src = './img_producten/long_tail_brons.png';
            break;
        case 'beige':
            productImg.src = './img_producten/long_tail_beige.png';
            break;
        case 'green':
            productImg.src = './img_producten/long_tail_groen.png';
            break;
        case 'whitesmoke':
            productImg.src = './img_producten/long_tail_wit.png';
            break;
        case 'black':
            productImg.src = './img_producten/long_tail_zwart.png';
            break;
        default:
            break;
    }
}
