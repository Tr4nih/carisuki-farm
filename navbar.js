document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function checkScroll() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    }

    window.addEventListener("scroll", function() {
        requestAnimationFrame(checkScroll);
    });

   
    checkScroll();
});