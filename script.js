const form = document.getElementById('reportForm');
const lista = document.getElementById('listaProblemas');
// Protege a página principal
const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
if (!usuario) {
  alert("Você precisa estar logado para acessar esta página.");
  window.location.href = "login.html";
}
const problema = {
  usuario: usuario.email,
  categoria,
  descricao,
  endereco,
  data: new Date().toLocaleString()
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const categoria = document.getElementById('categoria').value;
  const descricao = document.getElementById('descricao').value;
  const endereco = document.getElementById('endereco').value;

  const problema = {
    categoria,
    descricao,
    endereco,
    data: new Date().toLocaleString()
  };

  let problemas = JSON.parse(localStorage.getItem('problemas')) || [];
  problemas.push(problema);
  localStorage.setItem('problemas', JSON.stringify(problemas));

  form.reset();
  renderizarProblemas();
});

function renderizarProblemas() {
  const problemas = JSON.parse(localStorage.getItem('problemas')) || [];
  lista.innerHTML = '<h2>Problemas reportados:</h2>';

  problemas.forEach((p, index) => {
    lista.innerHTML += `
      <div style="background:#fff; padding:10px; margin:10px 0; border-left: 5px solid #3498db">
        <strong>${p.categoria}</strong><br>
        <em>${p.data}</em><br>
        ${p.descricao}<br>
        <small>Endereço: ${p.endereco}</small>
      </div>
    `;
  });
}

renderizarProblemas();

