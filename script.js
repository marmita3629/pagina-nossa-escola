// === GORDINHO BOLOLO CARROSSEL JS ===
// Adiciona carrossel tipo Netflix sem alterar o HTML base

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todas as seções de estudantes
  const secoes = document.querySelectorAll(".estudante");

  secoes.forEach((secao, index) => {
    const container = secao.querySelector(".estudantes_todos");
    if (!container) return;

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

    // Insere setas e container dentro do wrapper
    container.parentNode.insertBefore(wrapper, container);
    wrapper.appendChild(setaEsquerda);
    wrapper.appendChild(container);
    wrapper.appendChild(setaDireita);

    // Aplica estilos diretamente pelo JS (sem precisar mudar CSS)
    Object.assign(container.style, {
      display: "flex",
      overflowX: "auto",
      scrollBehavior: "smooth",
      gap: "40px",
      padding: "20px",
    });

    Object.assign(wrapper.style, {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
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

    // Funções de clique
    setaDireita.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });

    setaEsquerda.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });
  });
});
