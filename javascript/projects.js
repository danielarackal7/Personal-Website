let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides(n, slider) {
    let i;
    let slides = slider.querySelectorAll('img');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide(button) {
    const slider = button.closest('.slider');
    slideIndex++;
    showSlides(slideIndex, slider);
}

function prevSlide(button) {
    const slider = button.closest('.slider');
    slideIndex--;
    showSlides(slideIndex, slider);
}

// Initialize the slides
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        showSlides(slideIndex, slider);
    });
});
