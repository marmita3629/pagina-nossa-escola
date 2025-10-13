const alunosGrupo = document.querySelector(".grupo.alunos");
const alunasGrupo = document.querySelector(".grupo.alunas");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");

botaoProximo.addEventListener("click", () => {
  alunosGrupo.classList.remove("ativo");
  alunasGrupo.classList.add("ativo");
});

botaoAnterior.addEventListener("click", () => {
  alunasGrupo.classList.remove("ativo");
  alunosGrupo.classList.add("ativo");
});
