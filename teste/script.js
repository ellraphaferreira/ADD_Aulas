// script.js

const abrir = document.getElementById("abrirCadastro");
const modal = document.getElementById("modalCadastro");
const fechar = document.getElementById("fechar");

// Abrir modal
abrir.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar modal
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar clicando fora da caixa
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});