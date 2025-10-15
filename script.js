// Gordinho bololo 2x1 Switch - Feito com carinho 😎

document.addEventListener("DOMContentLoaded", () => {
  const btnAlunos = document.getElementById("btn-alunos");
  const btnAlunas = document.getElementById("btn-alunas");
  const grupoAlunos = document.querySelector(".grupo-alunos");
  const grupoAlunas = document.querySelector(".grupo-alunas");

  btnAlunos.addEventListener("click", () => {
    grupoAlunos.classList.add("ativo");
    grupoAlunas.classList.remove("ativo");
    btnAlunos.classList.add("ativo");
    btnAlunas.classList.remove("ativo");
  });

  btnAlunas.addEventListener("click", () => {
    grupoAlunas.classList.add("ativo");
    grupoAlunos.classList.remove("ativo");
    btnAlunas.classList.add("ativo");
    btnAlunos.classList.remove("ativo");
  });
});
