document.addEventListener("DOMContentLoaded", function() {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000; // Duración total del conteo en milisegundos

    // Función para iniciar el conteo
    function startCount(container) {
        let valueDisplay = container.querySelector(".num");
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"), 10);
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue.toString().padStart(3, '0'); // Agregar ceros a la izquierda
            if (startValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    }

    // Configuración del Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                if (!container.classList.contains('active')) {
                    container.classList.add('active');
                    startCount(container);
                }
                observer.unobserve(container); // Deja de observar el elemento después de activarlo
            }
        });
    }, options);

    valueDisplays.forEach(display => {
        observer.observe(display.closest('.container-contador')); // Observar el contenedor del contador
    });
});