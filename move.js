document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('#carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let momentumID;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        cancelMomentumTracking();
    });

    slider.addEventListener('mouseleave', () => {
        if (isDown) applyMomentum();
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        if (isDown) applyMomentum();
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const run = (x - startX) * 100; // Mengurangi kecepatan drag agar lebih halus
        velocity = run; // Set kecepatan sesuai dengan gerakan mouse
        slider.scrollLeft = scrollLeft - run;
    });

    function applyMomentum() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
    }

    function momentumLoop() {
        slider.scrollLeft -= velocity;
        velocity *= 0; // Mengurangi kecepatan secara bertahap
        if (Math.abs(velocity) > 0) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }
});