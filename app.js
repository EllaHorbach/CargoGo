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


















document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.querySelector('.productButton');
    buyButton.addEventListener('click', function () {
        // Checken of het product al in de winkelwagen zit
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const productTitle = document.querySelector('.productTitel').textContent.trim();
        const productAlreadyAdded = cartItems.some(item => item.title === productTitle);

        if (!productAlreadyAdded) {
            // Voeg hier product toe aan de winkelwagen
            const product = {
                title: productTitle,
                price: document.querySelector('.productPrice').textContent.trim(),
                description: document.querySelector('.productDesc').textContent.trim(),
                imageSrc: document.querySelector('.productImg').src
            };

            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
            alert('Product is toegevoegd aan het winkelwagentje!');
        }
    });

    const colorSelect = document.querySelectorAll('.colour-select div');

    colorSelect.forEach(function (element) {
        element.addEventListener('click', function () {
            const color = element.id;
            changeImage(color);
        });
    });

    function changeImage(color) {
        const productImg = document.querySelector('.productImg');
        switch (color) {
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

   
});














function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productTitle = document.querySelector('.productTitel').textContent.trim();
    alert(productTitle); // Voeg deze regel toe om de producttitel te controleren
    const productAlreadyAdded = cartItems.some(item => item.title === productTitle);

    if (!productAlreadyAdded) {
        // Product toevoegen aan de winkelwagen
        const product = {
            title: productTitle,
            price: document.querySelector('.productPrice').textContent.trim(),
            description: document.querySelector('.productDesc').textContent.trim(),
            imageSrc: document.querySelector('.productImg').src
        };

        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert('Product is toegevoegd aan het winkelwagentje!');
    } else {
        alert('Dit product is al aan het winkelwagentje toegevoegd!');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.querySelector('.productButton');
    buyButton.addEventListener('click', function () {
        // Controleren of het product al in de winkelwagen zit
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const productTitle = document.querySelector('.productTitel').textContent.trim();
        const productAlreadyAdded = cartItems.some(item => item.title === productTitle);

        if (!productAlreadyAdded) {
            // Product toevoegen aan de winkelwagen
            const product = {
                title: productTitle,
                price: document.querySelector('.productPrice').textContent.trim(),
                description: document.querySelector('.productDesc').textContent.trim(),
                imageSrc: document.querySelector('.productImg').src
            };

            cartItems.push(product);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Product is toegevoegd aan het winkelwagentje!');
        } else {
            alert('Dit product is al aan het winkelwagentje toegevoegd!');
        }
    });
});


console.log(JSON.parse(localStorage.getItem('cartItems')));
console.log("Producttitel:", productTitle);
console.log("Product al toegevoegd:", productAlreadyAdded);




// JavaScript-functie om het product aan de winkelwagen toe te voegen
function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productTitle = document.querySelector('.productTitel').textContent.trim();

    // Product toevoegen aan de winkelwagen
    const product = {
        title: productTitle,
        price: document.querySelector('.productPrice').textContent.trim(),
        description: document.querySelector('.productDesc').textContent.trim(),
        imageSrc: document.querySelector('.productImg').src
    };

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(JSON.parse(localStorage.getItem('cartItems')));

    alert('Product is toegevoegd aan het winkelwagentje!');
}

