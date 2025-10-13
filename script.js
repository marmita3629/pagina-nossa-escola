document.querySelectorAll(".seta").forEach(seta => {
  seta.addEventListener("click", () => {
    const targetClass = seta.dataset.target;
    const container = document.querySelector(`.carrossel.${targetClass}`);
    const scrollAmount = 300; // distância que desliza por clique

    if (seta.classList.contains("direita")) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });
});
