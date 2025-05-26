const ctx = document.getElementById('grafico').getContext('2d');

const grafico = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Desempenho do Biodigestor',
      data: [20, 35, 55, 40, 70, 65],
      borderColor: '#32672C',
      backgroundColor: 'rgba(50, 103, 44, 0.2)',
      borderWidth: 2,
    }],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    }
  },
  plugins: [{
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'white'; // fundo do gráfico
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  }]
});