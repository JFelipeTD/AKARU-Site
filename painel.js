// Garante que o script só execute após o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica para o Gráfico Chart.js ---

    // Obtém o contexto 2D do elemento canvas com o ID 'grafico'
    const ctx = document.getElementById('grafico').getContext('2d');

    // Cria uma nova instância do gráfico Chart.js
    const grafico = new Chart(ctx, {
        type: 'line', // Define o tipo de gráfico como linha
        data: {
            // Rótulos para o eixo X (meses)
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Desempenho do Biodigestor', // Título da série de dados
                data: [20, 35, 55, 40, 70, 65], // Dados para o gráfico
                borderColor: '#32672C', // Cor da linha do gráfico
                backgroundColor: 'rgba(50, 103, 44, 0.2)', // Cor de preenchimento abaixo da linha (com transparência)
                borderWidth: 2, // Largura da linha
                fill: true, // Preenche a área abaixo da linha
                tension: 0.4 // Suaviza as curvas da linha
            }],
        },
        options: {
            responsive: true, // Torna o gráfico responsivo ao tamanho do container
            maintainAspectRatio: false, // Permite que o gráfico não mantenha a proporção original, ajustando-se ao container
            plugins: {
                legend: {
                    display: true, // Exibe a legenda
                    position: 'top', // Posição da legenda
                    labels: {
                        color: '#555' // Cor do texto da legenda
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true, // O eixo Y começa em zero
                    title: {
                        display: true,
                        text: 'Desempenho', // Título do eixo Y
                        color: '#555'
                    },
                    ticks: {
                        stepSize: 10, // Incremento dos rótulos do eixo Y
                        color: '#555'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // Cor das linhas de grade do eixo Y
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mês', // Título do eixo X
                        color: '#555'
                    },
                    ticks: {
                        color: '#555'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // Cor das linhas de grade do eixo X
                    }
                }
            }
        },
        plugins: [{
            id: 'custom_canvas_background_color',
            beforeDraw: (chart) => {
                const ctx = chart.canvas.getContext('2d');
                ctx.save();
                ctx.globalCompositeOperation = 'destination-over';
                ctx.fillStyle = 'white'; // Define o fundo do gráfico como branco
                ctx.fillRect(0, 0, chart.width, chart.height);
                ctx.restore();
            }
        }]
    });

    // --- Lógica para Atualizar Dados do Painel (Exemplo) ---
    // Você pode substituir isso por dados reais de uma API ou sensor
    function atualizarDados() {
        const temperaturaElement = document.getElementById('temperatura');
        const umidadeElement = document.getElementById('umidade');
        const gasGeradoElement = document.getElementById('gas-gerado');

        // Dados de exemplo (substitua por dados dinâmicos)
        const temperatura = (Math.random() * (35 - 25) + 25).toFixed(1); // Entre 25 e 35
        const umidade = (Math.random() * (90 - 70) + 70).toFixed(1);     // Entre 70 e 90
        const gasGerado = (Math.random() * (100 - 50) + 50).toFixed(1);  // Entre 50 e 100

        temperaturaElement.textContent = `${temperatura} °C`;
        umidadeElement.textContent = `${umidade} %`;
        gasGeradoElement.textContent = `${gasGerado} m³`;
    }

    // Chama a função de atualização de dados inicialmente
    atualizarDados();

    // Opcional: Atualiza os dados a cada 5 segundos (exemplo de simulação)
    // setInterval(atualizarDados, 5000);
});
