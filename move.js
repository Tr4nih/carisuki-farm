document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('#carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('pointerdown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.clientX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('pointerleave', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
        }
    });

    slider.addEventListener('pointerup', () => {
        if (isDown) {
            isDown = false;
            slider.classList.remove('active');
        }
    });

    slider.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.clientX;
        const speed = x - startX;
        slider.scrollLeft = scrollLeft - speed * 3; // Update scroll position directly
    });
});




