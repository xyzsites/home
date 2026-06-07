let touchStartX = 0;
let touchEndX = 0;

/* Change these when you add more pages */
const MIN_PAGE = 96;
const MAX_PAGE = 101;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {

    const filename = window.location.pathname
        .split('/')
        .pop();

    const currentPage = parseInt(
        filename.replace('.html', '')
    );

    /* Swipe Left = Next Page */
    if (touchEndX < touchStartX - 50) {

        let nextPage = currentPage + 1;

        if (nextPage > MAX_PAGE) {
            nextPage = MIN_PAGE;
        }

        window.location.href =
            String(nextPage).padStart(3, '0') + '.html';
    }

    /* Swipe Right = Previous Page */
    if (touchEndX > touchStartX + 50) {

        let prevPage = currentPage - 1;

        if (prevPage < MIN_PAGE) {
            prevPage = MAX_PAGE;
        }

        window.location.href =
            String(prevPage).padStart(3, '0') + '.html';
    }
}
