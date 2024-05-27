document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const firstSlide = document.querySelector('.slide:first-child');
    const lastSlide = document.querySelector('.slide:last-child');
    let currentIndex = 0;
    let isAnimating = false;

    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, firstSlide);

    const updateSlidePosition = () => {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;
    };

    const showNextSlide = () => {
        if (isAnimating) return;
        isAnimating = true;
        currentIndex += 1;
        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(-${100 * (currentIndex + 1)}%)`;

        slides.addEventListener('transitionend', () => {
            if (currentIndex >= slideCount) {
                currentIndex = 0;
                updateSlidePosition();
            }
            isAnimating = false;
        }, { once: true });
    };

    setInterval(showNextSlide, 3000);
    updateSlidePosition();
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', () => {
        redirectToSearchUnsupportedPage();
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            redirectToSearchUnsupportedPage();
        }
    });

    function redirectToSearchUnsupportedPage() {
        window.location.href = 'index_nosearch.html';
    }
});
