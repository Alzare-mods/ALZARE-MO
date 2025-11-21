// admin-dashboard.js - muestra métricas y un gráfico con Chart.js
function renderAdminDashboard(data) {
  document.getElementById('total-sales').textContent = '$' + (data.totalSales/100).toFixed(2);
  const ctx = document.getElementById('salesChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [{label:'Ventas', data:data.sales, fill:false, tension:0.3}]
    }
  });
}
// Ejemplo de llamada: fetch('/admin/metrics').then(r=>r.json()).then(renderAdminDashboard);