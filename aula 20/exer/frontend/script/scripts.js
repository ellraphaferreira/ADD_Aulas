let data = []
const server = "http://localhost:8080"
const form = document.getElementById('formulario')

async function fetchData() {
    const response = await fetch(`${server}/estoque/pecas`)
    data = await response.json()
}

function setTableData() {
    const table = document.getElementById('table-card')

    table.innerHTML = ""

    data.forEach((e) => {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
            <td>${e.quantidade}</td>
            <td>${e.preco_unitario}</td>
            <td><button class="button" onclick="deletar(${e.id})">Deletar</button></td>
        `

        table.appendChild(tr)
    })
}
async function deletar(id) {
    await fetch(`${server}/estoque/delete/${id}`, {
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

    await fetch(`${server}/estoque/register`, {
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
