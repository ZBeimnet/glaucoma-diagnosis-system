export const chart_data = {
    type: "line",
    data: {
      labels: ["Addis Ababa", "Afar", "Amhara", "Benishangul", "Dire Dawa", "Gambela", "Harari", "Oromia", "Tigray", "SNNPR"],
      datasets: [
        {
          label: "Glaucomatous",
          data: [20, 30, 25, 50, 79, 82, 27, 14, 90, 64],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
        {
          label: "Total Diagnosed",
          data: [340, 414, 231, 532, 541, 498, 677, 289, 902, 834],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default chart_data;