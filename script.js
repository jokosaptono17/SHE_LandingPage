// Memastikan kode JavaScript berjalan setelah seluruh dokumen HTML dimuat
document.addEventListener("DOMContentLoaded", () => {
  // --- Fungsionalitas Carousel Gambar Hero ---
  const heroSection = document.getElementById("hero-section");
  const heroImagesWrapper = document.getElementById("hero-images-wrapper");

  // Array URL gambar untuk carousel.
  // Ganti dengan jalur (path) ke file gambar Anda sendiri.
  // Pastikan jalur relatif terhadap file index.html atau file CSS/JS.
  const images = [
    "./images/gambar1.jpg", // Mengambil gambar dari folder 'images'
    "./images/gambar2.png",
    "./images/gambar3.jpg",
    "./images/gambar4.jpg",
  ];

  let currentImageIndex = 0; // Indeks gambar yang sedang ditampilkan

  // Secara dinamis membuat elemen gambar dan menambahkannya ke wrapper
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "SHE Background Image"; // Alt text generik, bisa diperbaiki
    heroImagesWrapper.appendChild(img);
  });

  // Mengatur lebar wrapper berdasarkan jumlah gambar
  // Setiap gambar akan mengambil 100% dari lebar heroSection, jadi wrapper membutuhkan (jumlahGambar * 100%)
  heroImagesWrapper.style.width = `${images.length * 100}%`;
  // Mengatur lebar setiap gambar di dalam wrapper
  heroImagesWrapper.querySelectorAll("img").forEach((img) => {
    img.style.width = `${100 / images.length}%`;
  });

  // Fungsi untuk mengubah gambar latar belakang hero dengan efek geser
  function slideHeroBackground() {
    // Hitung posisi geser berdasarkan indeks gambar saat ini
    // Misalnya, untuk gambar kedua (indeks 1), geser -25% (jika ada 4 gambar)
    const offset = -currentImageIndex * (100 / images.length);
    heroImagesWrapper.style.transform = `translateX(${offset}%)`;

    // Pindah ke gambar berikutnya, kembali ke awal jika sudah mencapai akhir array
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  // Panggil fungsi pertama kali untuk mengatur posisi awal (menampilkan gambar pertama)
  slideHeroBackground();

  // Set interval untuk mengubah gambar setiap 5 detik (5000 milidetik)
  setInterval(slideHeroBackground, 5000);

  // --- Fungsionalitas Klik Kartu ---
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
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
});
