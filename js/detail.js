// Gallery carousel for detail pages
const detailGallery = {
  current: 0,
  slides: []
};

let detailGalleryTimer;

function updateDetailGallery() {
  const slides = document.querySelectorAll('.gallery__slide');
  slides.forEach(slide => slide.classList.remove('active'));
  if (slides[detailGallery.current]) {
    slides[detailGallery.current].classList.add('active');
  }

  clearTimeout(detailGalleryTimer);
  detailGalleryTimer = setTimeout(() => {
    detailGallery.current = (detailGallery.current + 1) % slides.length;
    updateDetailGallery();
  }, 6000);
}

const galleryPrevBtn = document.querySelector('.js-gallery-prev');
const galleryNextBtn = document.querySelector('.js-gallery-next');

if (galleryPrevBtn) {
  galleryPrevBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.gallery__slide');
    detailGallery.current = (detailGallery.current - 1 + slides.length) % slides.length;
    updateDetailGallery();
  });
}

if (galleryNextBtn) {
  galleryNextBtn.addEventListener('click', () => {
    const slides = document.querySelectorAll('.gallery__slide');
    detailGallery.current = (detailGallery.current + 1) % slides.length;
    updateDetailGallery();
  });
}

const slides = document.querySelectorAll('.gallery__slide');
if (slides.length > 0) {
  detailGalleryTimer = setTimeout(() => {
    detailGallery.current = (detailGallery.current + 1) % slides.length;
    updateDetailGallery();
  }, 6000);
}

// Navbar toggle
const navbarToggle = document.querySelector('.navbar__toggle');
if (navbarToggle) {
  navbarToggle.addEventListener('click', () => {
    const nav = document.querySelector('.navbar__nav');
    nav.classList.toggle('active');
  });
}

document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.navbar__nav');
    nav.classList.remove('active');
  });
});

// Form submit
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias! Un asesor te contactará en breve.');
    e.target.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
