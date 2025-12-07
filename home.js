// Ambil semua elemen slide
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// Buat dot indikator
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
    dots[i].classList.toggle('active', i === n);
  });
  index = n;
}

// Tombol next/prev
next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto-slide setiap 5 detik
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

function toggleDropdown() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

// Tutup dropdown jika klik di luar
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
