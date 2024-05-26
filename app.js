document.addEventListener('DOMContentLoaded', function () {
    const colorSelect = document.querySelectorAll('.colour-select div');

    colorSelect.forEach(function (element) {
        element.addEventListener('click', function () {
            const color = element.id;
            changeImage(color);
        });
    });

    const buyButton = document.querySelector('.productButton');
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

        alert('Product is toegevoegd aan het winkelwagentje!');
    });
});

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
        default:
            break;
    }
}

