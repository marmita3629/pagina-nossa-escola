// 1. VERIFICAÇÃO DE LOGIN
// Isso executa antes de tudo. Se não estiver logado, nem carrega o resto.
if (sessionStorage.getItem("logado") !== "true") {
 // MANDA PARA O LOGIN SE NÃO ESTIVER LOGADO
 window.location.href = "login.html"; 
}


// 2. CÓDIGO DA PÁGINA (SÓ EXECUTA SE ESTIVER LOGADO)
// Espera o HTML ser carregado antes de executar qualquer código
document.addEventListener("DOMContentLoaded", () => {

 //troca dinâmica entre Alunos e Alunas
 const btnAlunos = document.getElementById("btn-alunos");
 const btnAlunas = document.getElementById("btn-alunas");
 const container = document.getElementById("container-estudantes");

 const alunos = [
  { nome: "Pedro Álvares Cabral", img: "pedro.jpg" },
  { nome: "Leonardo da Vinci", img: "leonardo.jpg" },
  { nome: "Luiz Gonzaga", img: "luiz.jpg" },
  { nome: "Carlinhos Maia", img: "carlinhos.jpg" }
 ];

 const alunas = [
  { nome: "Elizabeth II", img: "rainha.jpg" },
  { nome: "Malala Yousafzai", img: "malala.jpg" },
  { nome: "Maria da Penha", img: "maria_penha.jpg" },
  { nome: "Maria I", img: "maria.jpg" }
 ];

 function renderGrupo(grupo) {
    // Verifica se o container existe na página
  if (container) { 
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
 }
 // Eventos dos botões Alunos/Alunas
  // Adiciona verificação se os botões existem
 if (btnAlunos && btnAlunas) {
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

    // Render inicial (só executa se os botões existirem)
    renderGrupo(alunos);
  }

 // ==============================
 // CARROSSEL DE IMAGENS
 // ==============================
 const carrosselImgs = [
    "comunicado.jpeg",
  "matricula.jpeg",
  "rematricula.jpeg"
 ];
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

    // Garante que a imagem exista antes de trocar
    if (carrosselImg) {
      carrosselImg.style.opacity = "0";
      setTimeout(() => {
        carrosselImg.src = carrosselImgs[indexAtual];
        carrosselImg.style.opacity = "1";
      }, 200);
    }
 }

  // Garante que os botões do carrossel existam
  if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => mudarImagem("prev"));
    btnNext.addEventListener("click", () => mudarImagem("next"));
  }

 // ==============================
 // LOGOUT (CÓDIGO NOVO)
 // ==============================
 const btnLogout = document.getElementById("btn-logout");

  // Adiciona o evento de clique no botão "Sair"
  if (btnLogout) {
    btnLogout.addEventListener("click", (event) => {
      event.preventDefault(); // Impede que o link '#' mude a URL
      
      // 1. Remove o item "logado" da sessão
      sessionStorage.removeItem("logado"); 
      
      // 2. Redireciona para a página de login
      window.location.href = "login.html";
    });
  }

}); // <-- FIM DO DOMCONTENTLOADED