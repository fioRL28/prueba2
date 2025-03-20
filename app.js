document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const logos = Array.from(track.children);
    
    // Duplicamos los logos para el efecto infinito
    logos.forEach(logo => {
        let clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    let position = 0;
    let speed = 1; // Control de velocidad

    function moveLogos() {
        position -= speed;
        if (position <= -track.scrollWidth / 2) {
            position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveLogos);
    }

    moveLogos(); // Inicia la animación
});
