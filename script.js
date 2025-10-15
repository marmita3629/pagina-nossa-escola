// Gordinho bololo 😎 — troca dinâmica entre Alunos e Alunas

document.addEventListener("DOMContentLoaded", () => {
  const btnAlunos = document.getElementById("btn-alunos");
  const btnAlunas = document.getElementById("btn-alunas");
  const container = document.getElementById("container-estudantes");

  const alunos = [
    { nome: "Pedro", img: "estudante_menino.png" },
    { nome: "Aluno 2", img: "estudante_menino.png" },
    { nome: "Aluno 3", img: "estudante_menino.png" },
    { nome: "Aluno 4", img: "estudante_menino.png" }
  ];

  const alunas = [
    { nome: "Aluna 1", img: "estudante_menina.png" },
    { nome: "Aluna 2", img: "estudante_menina.png" },
    { nome: "Aluna 3", img: "estudante_menina.png" },
    { nome: "Aluna 4", img: "estudante_menina.png" }
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
