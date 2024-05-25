

// JavaScript om de afbeelding te wijzigen op basis van de geselecteerde kleur
document.addEventListener('DOMContentLoaded', function () {
    const colorSelect = document.querySelectorAll('.colour-select div');

    // Itereer over alle kleurselectie-elementen en voeg een klikgebeurtenis toe
    colorSelect.forEach(function (element) {
        element.addEventListener('click', function () {
            // Haal de kleur op van het ID-attribuut van het element
            const color = element.id;
            // Roep de changeImage-functie aan en geef de geselecteerde kleur door
            changeImage(color);
        });
    });
});

function changeImage(color) {
    const productImg = document.querySelector('.productImg'); // Gebruik querySelector omdat er slechts één element met deze klasse is
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


