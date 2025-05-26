// Exemplo de dados vindos do backend (via API)
const biodigestores = [
    {
        cliente: "Isaac",
        temperatura: "36°C",
        nivelGas: "75%",
        ph: "6.8"
    },
    {
        cliente: "Girotto",
        temperatura: "34°C",
        nivelGas: "60%",
        ph: "7.0"
    },
    {
        cliente: "Tenda tal",
        temperatura: "35°C",
        nivelGas: "80%",
        ph: "6.7"
    }
    // ...aqui o backend pode adicionar automaticamente mais biodigestores
];

function criarPainel(biodigestor) {
    const div = document.createElement("div");
    div.className = "biodigestor";
    div.innerHTML = `
        <h2>${biodigestor.cliente}</h2>
        <div class="info-cards">
            <div class="card">
                <h3>Temperatura</h3>
                <p>${biodigestor.temperatura}</p>
            </div>
            <div class="card">
                <h3>Nível de Gás</h3>
                <p>${biodigestor.nivelGas}</p>
            </div>
            <div class="card">
                <h3>pH</h3>
                <p>${biodigestor.ph}</p>
            </div>
        </div>
    `;
    return div;
}

window.onload = () => {
    const container = document.getElementById("biodigestores-container");
    biodigestores.forEach(biodigestor => {
        container.appendChild(criarPainel(biodigestor));
    });
};