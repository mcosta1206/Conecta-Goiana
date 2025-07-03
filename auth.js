// Cadastro
const cadastroForm = document.getElementById("cadastroForm");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    let users = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = users.find(u => u.email === email);
    if (existe) {
      alert("Este e-mail já está cadastrado.");
      return;
    }

    users.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(users));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    let users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = users.find(u => u.email === email && u.senha === senha);

    if (usuario) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      alert("Login realizado!");
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha inválidos.");
    }
  });
}
