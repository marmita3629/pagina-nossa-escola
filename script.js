// animação de carrossel automático
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let index = 0;

function moveCarousel() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  const moveAmount = slides[index].offsetWidth * index;
  track.style.transform = `translateX(-${moveAmount}px)`;
}

// muda o aluno a cada 3 segundos
setInterval(moveCarousel, 3000);
