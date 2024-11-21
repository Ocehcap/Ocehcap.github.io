document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('carouselExampleIndicators');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    if (carousel && indicators.length > 0) {
        carousel.addEventListener('slide.bs.carousel', (event) => {
            indicators.forEach((indicator, index) => {
                if (index === event.to) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        });
    }
});

