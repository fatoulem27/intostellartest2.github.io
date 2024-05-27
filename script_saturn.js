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
        window.location.href = 'nosearch.html';
    }

    const cautionButton = document.getElementById('cautionButton');
    const cautionPopup = document.getElementById('cautionPopup');
    const closeButton = document.querySelector('.close-button');

    cautionButton.addEventListener('click', () => {
        cautionPopup.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        cautionPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cautionPopup) {
            cautionPopup.style.display = 'none';
        }
    });
});
