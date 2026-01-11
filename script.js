document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Navbar Scroll Effect ---
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- 2. Carousel Logika (Diperbarui untuk efisiensi) ---
  const heroImagesWrapper = document.getElementById("hero-images-wrapper");

  // Daftar Gambar (Sesuai nama file Anda)
  const images = ["WS1.jpg", "WS2.png", "WS3.jpg", "mekanik.png"];

  let currentImageIndex = 0;

  // Setup Awal Carousel
  function initCarousel() {
    // Bersihkan wrapper jika ada isi sebelumnya
    heroImagesWrapper.innerHTML = "";

    // Atur lebar wrapper
    heroImagesWrapper.style.width = `${images.length * 100}%`;

    // Masukkan gambar
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "SHE Plant Highlight";
      // Set lebar tiap gambar
      img.style.width = `${100 / images.length}%`;
      heroImagesWrapper.appendChild(img);
    });
  }

  // Fungsi Geser
  function slideHeroBackground() {
    const offset = -currentImageIndex * (100 / images.length);
    heroImagesWrapper.style.transform = `translateX(${offset}%)`;

    // Update index untuk putaran berikutnya
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  // Jalankan
  initCarousel();
  // Delay sedikit agar transisi awal tidak 'lompat', baru mulai interval
  setTimeout(slideHeroBackground, 100);
  setInterval(slideHeroBackground, 5000); // 5 Detik per geseran

  // --- 3. Card Click Logic (Tetap dipertahankan karena fungsional) ---
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Mencegah klik jika user menyeleksi teks
      const url = card.dataset.url;
      const target = card.getAttribute("target");

      if (url) {
        if (target === "_blank") {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      }
    });
  });

  // --- 4. Smooth Scroll untuk Link Anchor ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
