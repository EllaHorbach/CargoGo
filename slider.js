let currentSlide = 0;


function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slider img').clientWidth;

    if (index < 0) {
        currentSlide = slider.childElementCount - 1;
    } else if (index >= slider.childElementCount) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * slideWidth;
    slider.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
