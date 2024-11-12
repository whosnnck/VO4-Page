// Selecciona todos los carruseles en la página
document.querySelectorAll(".photo-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const leftArrow = carousel.querySelector(".left-arrow");
  const rightArrow = carousel.querySelector(".right-arrow");
  const carouselItemWidth =
    carousel.querySelector(".carousel-item").offsetWidth + 20;
  let currentPosition = 0;

  function moveCarousel(direction) {
    const maxPosition = -((track.children.length - 1) * carouselItemWidth);

    if (direction === "right") {
      currentPosition -= carouselItemWidth;
      if (currentPosition < maxPosition) {
        currentPosition = 0; // Vuelve al inicio si llega al final
      }
    } else if (direction === "left") {
      currentPosition += carouselItemWidth;
      if (currentPosition > 0) {
        currentPosition = maxPosition; // Ir al final si está en el inicio
      }
    }

    track.style.transform = `translateX(${currentPosition}px)`;
  }

  // Añadir los eventos de clic a las flechas de este carrusel específico
  rightArrow.addEventListener("click", () => moveCarousel("right"));
  leftArrow.addEventListener("click", () => moveCarousel("left"));
});
