// Obtener los elementos
const zoomableImages = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Añadir evento a cada imagen para abrir el lightbox
zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Cerrar el lightbox al hacer clic en la "x"
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
