let data = []
const server = "http://localhost:8080"
const form = document.getElementById('formulario')
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

async function fetchData() {
    const response = await fetch(`${server}/control/livros`)
    data = await response.json()
}

function setTableData() {
    const table = document.getElementById('table-data')

    table.innerHTML = ""

    data.forEach((e) => {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${e.tittulo}</td>
            <td>${e.autor}</td>
            <td>${e.paginas_total}</td>
            <td>${e.status_livro}</td>
            <td>${e.genero}</td>
            <td><button class="button" onclick="deletar(${e.id})">Deletar</button></td>
            <td><button class="button" onclick="update(${e.id})">Deletar</button></td>
        `
        table.appendChild(tr)
    })
}
async function deletar(id) {
    await fetch(`${server}/control/delete/${id}`, {
        method: "DELETE"
    });

    await fetchData();
    setTableData();
}
async function upadate(id) {
    await fetch(`${server}/control/update/${id}`, {
        method: "DELETE"
    });

    await fetchData();
    setTableData();
}
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const codigo = document.getElementById('codigo').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidade = document.getElementById('quantidade').value
    const preco = document.getElementById('preco').value

    const dataToSend = {
        nome_peca: nome,
        codigo_peca: codigo,
        fornecedor: fornecedor,
        quantidade: Number(quantidade),
        preco_unitario: Number(preco)
    }

    await fetch(`${server}/control/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dataToSend)
    })
    form.reset()
   await fetchData() 
   setTableData()
})

window.addEventListener("load", async () => {
    await fetchData();
    setTableData();
});

