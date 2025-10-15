// === GORDINHO BOLOLO CARROSSEL JS (versão corrigida) ===
// Faz o carrossel apenas nas seções corretas (sem afetar o layout lateral)

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona apenas seções com múltiplos estudantes
  const secoes = document.querySelectorAll(".estudante");

  secoes.forEach((secao) => {
    const container = secao.querySelector(".estudantes_todos");

    // Se não tiver container ou menos de 3 imagens, ignora (não é carrossel)
    if (!container || container.querySelectorAll("img").length < 3) return;

    // Cria setas
    const setaEsquerda = document.createElement("button");
    const setaDireita = document.createElement("button");

    setaEsquerda.innerHTML = "⟨";
    setaDireita.innerHTML = "⟩";
    setaEsquerda.classList.add("seta", "esquerda");
    setaDireita.classList.add("seta", "direita");

    // Envolve o container original num wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("carrossel-container");

    // Insere o wrapper no lugar do container
    container.parentNode.insertBefore(wrapper, container);
    wrapper.appendChild(setaEsquerda);
    wrapper.appendChild(container);
    wrapper.appendChild(setaDireita);

    // Aplica estilos dinamicamente
    Object.assign(container.style, {
      display: "flex",
      overflowX: "auto",
      scrollBehavior: "smooth",
      gap: "60px",
      padding: "20px 10px",
      scrollbarWidth: "none",
    });

    container.style.scrollbarWidth = "none";

    Object.assign(wrapper.style, {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      width: "100%",
    });

    Object.assign(setaEsquerda.style, {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      border: "none",
      fontSize: "28px",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "10px",
      zIndex: "2",
      transition: "0.3s",
    });

    Object.assign(setaDireita.style, {
      ...setaEsquerda.style,
      left: "auto",
      right: "10px",
    });

    // Animação de hover nas setas
    setaEsquerda.addEventListener("mouseenter", () => setaEsquerda.style.backgroundColor = "rgba(0,0,0,0.8)");
    setaDireita.addEventListener("mouseenter", () => setaDireita.style.backgroundColor = "rgba(0,0,0,0.8)");
    setaEsquerda.addEventListener("mouseleave", () => setaEsquerda.style.backgroundColor = "rgba(0,0,0,0.5)");
    setaDireita.addEventListener("mouseleave", () => setaDireita.style.backgroundColor = "rgba(0,0,0,0.5)");

    // Movimento das setas
    setaDireita.addEventListener("click", () => {
      container.scrollBy({ left: 400, behavior: "smooth" });
    });

    setaEsquerda.addEventListener("click", () => {
      container.scrollBy({ left: -400, behavior: "smooth" });
    });
  });
});
