/* ========== 1. HEADER: berubah saat halaman digulir ========== */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ========== 2. MENU HP: buka/tutup ========== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

// Tutup menu otomatis setelah salah satu link diklik
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});