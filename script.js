const btnAlunos = document.getElementById("btnAlunos");
const btnAlunas = document.getElementById("btnAlunas");
const containerAlunos = document.getElementById("containerAlunos");
const containerAlunas = document.getElementById("containerAlunas");

btnAlunos.addEventListener("click", () => {
  btnAlunos.classList.add("ativo");
  btnAlunas.classList.remove("ativo");
  containerAlunos.classList.add("ativo");
  containerAlunas.classList.remove("ativo");
});

btnAlunas.addEventListener("click", () => {
  btnAlunas.classList.add("ativo");
  btnAlunos.classList.remove("ativo");
  containerAlunas.classList.add("ativo");
  containerAlunos.classList.remove("ativo");
});
