// Gordinho bololo 😎 — troca dinâmica entre Alunos e Alunas

document.addEventListener("DOMContentLoaded", () => {
  const btnAlunos = document.getElementById("btn-alunos");
  const btnAlunas = document.getElementById("btn-alunas");
  const container = document.getElementById("container-estudantes");

  const alunos = [
    { nome: "Pedro a. cabral", img: "estudante_menino.png" },
    { nome: "leonardo da vinte", img: "estudante_menino.png" },
    { nome: "pedro gonçalves", img: "estudante_menino.png" },
    { nome: "carlinhos maia", img: "estudante_menino.png" }
  ];

  const alunas = [
    { nome: "rainha elizabete IV", img: "estudante_menina.png" },
    { nome: "malala", img: "estudante_menina.png" },
    { nome: "lava louça", img: "estudante_menina.png" },
    { nome: "sei lá", img: "estudante_menina.png" }
  ];

  function renderGrupo(grupo) {
    container.style.opacity = "0";
    setTimeout(() => {
      container.innerHTML = grupo.map(estudante => `
        <div class="estudante-div">
          <img class="estudante-imagem" src="${estudante.img}" alt="${estudante.nome}">
          <h3 class="estudante-nome">${estudante.nome}</h3>
          <div>
            <img class="estudante-icone" src="instagram.png" alt="Instagram">
            <img class="estudante-icone" src="facebook.png" alt="Facebook">
          </div>
        </div>
      `).join("");
      container.style.opacity = "1";
    }, 200);
  }

  // Eventos dos botões
  btnAlunos.addEventListener("click", () => {
    btnAlunos.classList.add("ativo");
    btnAlunas.classList.remove("ativo");
    renderGrupo(alunos);
  });

  btnAlunas.addEventListener("click", () => {
    btnAlunas.classList.add("ativo");
    btnAlunos.classList.remove("ativo");
    renderGrupo(alunas);
  });

  // Render inicial
  renderGrupo(alunos);
});
