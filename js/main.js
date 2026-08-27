// Plant rotation for model cards
const housePlants = {
  onix: { current: 0, plants: ['plan-onix-baja.png', 'plan-onix-alta.png'], labels: ['Planta Baja', 'Planta Alta'] },
  jade: { current: 0, plants: ['plan-jade-sotano.png', 'plan-jade-baja.png', 'plan-jade-alta.png'], labels: ['Sótano', 'Planta Baja', 'Planta Alta'] },
  cuarzo: { current: 0, plants: ['plan-cuarzo-roof.png', 'plan-cuarzo-alta.png', 'plan-cuarzo-baja.png'], labels: ['Roof Garden', 'Planta Alta', 'Planta Baja'] }
};

function updateModelImage(house) {
  const data = housePlants[house];
  const img = document.querySelector(`.js-model-img[data-house="${house}"]`);
  const label = img.parentElement.parentElement.querySelector('.model-card__label');

  img.style.opacity = '0.5';
  setTimeout(() => {
    img.src = 'assets/img/' + data.plants[data.current];
    label.textContent = data.labels[data.current];
    img.style.opacity = '1';
  }, 150);
}

document.querySelectorAll('.js-prev').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const house = e.currentTarget.dataset.house;
    const data = housePlants[house];
    data.current = (data.current - 1 + data.plants.length) % data.plants.length;
    updateModelImage(house);
  });
});

document.querySelectorAll('.js-next').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const house = e.currentTarget.dataset.house;
    const data = housePlants[house];
    data.current = (data.current + 1) % data.plants.length;
    updateModelImage(house);
  });
});

// Gallery carousel
const galleries = [
  { house: 'Casa Jade', caption: 'Cocina' },
  { house: 'Casa Cuarzo', caption: 'Rooftop' },
  { house: 'Casa Onix', caption: 'Recámara' }
];
let currentGallery = 0;
let galleryTimer;

function updateGallery() {
  const slides = document.querySelectorAll('.gallery__slide');
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentGallery].classList.add('active');

  const houseText = galleries[currentGallery].house;
  const houseParts = houseText.split(' ');
  const formattedHouse = `<span class="gallery__chip-text--light">${houseParts[0]}</span> ${houseParts[1]}`;
  document.getElementById('galleryHouse').innerHTML = formattedHouse;
  document.getElementById('galleryCaption').textContent = galleries[currentGallery].caption;

  clearTimeout(galleryTimer);
  galleryTimer = setTimeout(() => {
    currentGallery = (currentGallery + 1) % galleries.length;
    updateGallery();
  }, 6000);
}

document.querySelector('.js-gallery-prev').addEventListener('click', () => {
  currentGallery = (currentGallery - 1 + galleries.length) % galleries.length;
  updateGallery();
});

document.querySelector('.js-gallery-next').addEventListener('click', () => {
  currentGallery = (currentGallery + 1) % galleries.length;
  updateGallery();
});

galleryTimer = setTimeout(() => {
  currentGallery = (currentGallery + 1) % galleries.length;
  updateGallery();
}, 6000);

// Navbar toggle
document.querySelector('.navbar__toggle').addEventListener('click', () => {
  const nav = document.querySelector('.navbar__nav');
  nav.classList.toggle('active');
});

document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.navbar__nav');
    nav.classList.remove('active');
  });
});

// Form submit
document.querySelector('.contact__form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias! Un asesor te contactará en breve.');
  e.target.reset();
});

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
