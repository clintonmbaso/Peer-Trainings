// Basic Chart.js setup for the dashboard chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("revenueChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue ($)",
          data: [1000, 2000, 3000, 4000, 5000, 6000],
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          borderColor: "#3498db",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Revenue ($)",
          },
          beginAtZero: true,
        },
      },
    },
  });
});