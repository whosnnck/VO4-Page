const track = document.querySelector(".carousel-track");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carouselItemWidth =
  document.querySelector(".carousel-item").offsetWidth + 20; // ancho de cada elemento con margen
let currentPosition = 0;

function moveCarousel(direction) {
  const maxPosition = -((track.children.length - 1) * carouselItemWidth);

  if (direction === "right") {
    currentPosition -= carouselItemWidth;
    if (currentPosition < maxPosition) {
      currentPosition = 0; // Volver al inicio si llega al final
    }
  } else if (direction === "left") {
    currentPosition += carouselItemWidth;
    if (currentPosition > 0) {
      currentPosition = maxPosition; // Ir al final si está en el inicio
    }
  }

  track.style.transform = `translateX(${currentPosition}px)`;
}

rightArrow.addEventListener("click", () => moveCarousel("right"));
leftArrow.addEventListener("click", () => moveCarousel("left"));
