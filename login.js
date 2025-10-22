document.getElementById("btn-login").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("msgErro");

  // Usuário e senha padrão que você pode mudar depois
  if (usuario === "admin" && senha === "1234") {
    sessionStorage.setItem("logado", "true");
    window.location.href = "index.html"; // redireciona para a Home
  } else {
    erro.textContent = "Usuário ou senha incorretos!";
  }
});
