// Gordinho bololo 😎 — troca dinâmica entre Alunos e Alunas

document.addEventListener("DOMContentLoaded", () => {
  const btnAlunos = document.getElementById("btn-alunos");
  const btnAlunas = document.getElementById("btn-alunas");
  const container = document.getElementById("container-estudantes");

  const alunos = [
    { nome: "Pedro Álvares Cabral", img: "estudante_menino.png" },
    { nome: "Leonardo da Vinci", img: "estudante_menino.png" },
    { nome: "Luiz Gonzaga", img: "estudante_menino.png" },
    { nome: "Carlinhos Maia", img: "estudante_menino.png" }
  ];

  const alunas = [
    { nome: "Elizabeth II", img: "estudante_menina.png" },
    { nome: "Malala Yousafzai", img: "estudante_menina.png" },
    { nome: "Maria da Penha", img: "estudante_menina.png" },
    { nome: "Maria I", img: "estudante_menina.png" }
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

  // ==============================
  // 🖼️ CARROSSEL DE IMAGENS
  // ==============================
  const carrosselImgs = ["comunicado.jpeg","imagens_escola.jpg","rematricula.jpeg"];
  let indexAtual = 0;

  const carrosselImg = document.getElementById("carrossel-img");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  function mudarImagem(direcao) {
    if (direcao === "next") {
      indexAtual = (indexAtual + 1) % carrosselImgs.length;
    } else {
      indexAtual = (indexAtual - 1 + carrosselImgs.length) % carrosselImgs.length;
    }

    carrosselImg.style.opacity = "0";
    setTimeout(() => {
      carrosselImg.src = carrosselImgs[indexAtual];
      carrosselImg.style.opacity = "1";
    }, 200);
  }

  btnPrev.addEventListener("click", () => mudarImagem("prev"));
  btnNext.addEventListener("click", () => mudarImagem("next"));
