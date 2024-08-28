let bg = document.getElementById("bg");
let bg2 = document.getElementById("bg2");
let bg1 = document.getElementById("bg1");
let text = document.getElementById("text");

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    var screenWidth = window.innerWidth; // Mendefinisikan screenWidth di dalam fungsi

    if (screenWidth >= 768) { // Aktifkan hanya jika lebar layar 768px atau lebih
        bg.style.top = value * 0.6 + 'px';   // Gambar pertama bergerak lebih cepat
       
        text.style.transform = `translateY(${value * 0.8}px)`; // Teks bergerak dengan smooth
    } else {
        bg.style.top = '0px'; // Reset posisi gambar
        bg1.style.top = '0px';
        text.style.transform = 'translateY(0px)'; // Reset posisi teks
    }
});


