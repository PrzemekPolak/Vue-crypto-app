<script setup>
import ChartLine from "./ChartLine.vue";

var chartData = {
  labels: [
    5, 5.51, 6.43, 7.41, 7.5, 7.66, 8.16, 9.09, 9.21, 9.78, 9.86, 10.02, 10.34,
    10.4, 10.59, 11.24, 11.95, 12.87, 13.2, 13.77, 14.34, 15.09, 15.28, 15.49,
    15.63, 16.05, 16.93, 17.26, 17.38, 17.4, 18.03, 18.99, 19.22, 20.16, 20.47,
    20.9, 21.79, 22.2, 22.67, 22.7, 23.41, 24.36, 25.03, 25.14, 25.32, 26.13,
    27.01, 27.73, 28.49, 28.51, 28.89, 28.82, 28.14, 27.43, 26.85, 26.35, 25.91,
    25.06, 24.14, 23.21, 22.43, 22.03, 21.44, 21.37, 20.99, 20.12, 20, 19.43,
    19.34, 18.47, 18.14, 17.23, 16.83, 16.35, 15.66, 15.24, 14.7, 13.71, 13.42,
    13.38, 13.38, 13.32, 12.73, 12.51, 11.81, 11.58, 10.66, 9.96, 9.7, 9.59,
    9.27, 8.54, 8.26, 8.08, 7.35, 6.69, 5.87, 5.58, 5.14, 4.71, 4.05,
  ].reverse(),
  datasets: [
    {
      borderColor: "rgb(138,43,226)",
      pointBorderColor: "rgb(138,43,226)",
      pointBackgroundColor: "#FFFFFF",
      label: "Fioletowy",
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 0, 0, 160);

        gradient.addColorStop(0, "rgb(138,43,226,1)");
        gradient.addColorStop(0.5, "rgb(138,43,226,0.7)");
        gradient.addColorStop(1, "rgb(138,43,226,0)");

        return gradient;
      },
      data: [
        5, 5.51, 6.43, 7.41, 7.5, 7.66, 8.16, 9.09, 9.21, 9.78, 9.86, 10.02,
        10.34, 10.4, 10.59, 11.24, 11.95, 12.87, 13.2, 13.77, 14.34, 15.09,
        15.28, 15.49, 15.63, 16.05, 16.93, 17.26, 17.38, 17.4, 18.03, 18.99,
        19.22, 20.16, 20.47, 20.9, 21.79, 22.2, 22.67, 22.7, 23.41, 24.36,
        25.03, 25.14, 25.32, 26.13, 27.01, 27.73, 28.49, 28.51, 28.89, 28.82,
        28.14, 27.43, 26.85, 26.35, 25.91, 25.06, 24.14, 23.21, 22.43, 22.03,
        21.44, 21.37, 20.99, 20.12, 20, 19.43, 19.34, 18.47, 18.14, 17.23,
        16.83, 16.35, 15.66, 15.24, 14.7, 13.71, 13.42, 13.38, 13.38, 13.32,
        12.73, 12.51, 11.81, 11.58, 10.66, 9.96, 9.7, 9.59, 9.27, 8.54, 8.26,
        8.08, 7.35, 6.69, 5.87, 5.58, 5.14, 4.71, 4.05,
      ],
    },
    {
      borderColor: "#dddddf",
      pointBorderColor: "#dddddf",
      pointBackgroundColor: "#FFFFFF",
      label: "Szary",
      borderDash: [10, 5],
      data: [
        5, 5.51, 6.31, 6.97, 7.55, 8.28, 8.82, 9.72, 10.52, 10.56, 11.44, 11.84,
        12.82, 13.53, 14.07, 14.43, 14.57, 15.11, 15.41, 15.44, 15.84, 16.59,
        17.18, 17.75, 17.79, 18.38, 18.76, 19.53, 20.4, 20.52, 20.92, 21.86,
        22.83, 22.99, 23.76, 24.14, 24.35, 24.44, 25.37, 25.67, 26.43, 27.38,
        27.6, 27.7, 28.42, 28.99, 29.58, 29.87, 30.55, 31.13, 31.54, 32.21,
        32.43, 33.16, 33.33, 34.03, 34.93, 35.11, 35.64, 35.66, 36.57, 37.43,
        37.8, 38.79, 39.45, 39.95, 40.81, 41.1, 41.28, 42.13, 42.27, 41.58,
        41.16, 40.79, 40.69, 39.93, 39.51, 39.06, 38.53, 38.19, 37.83, 37.39,
        37.14, 36.89, 36.3, 36.12, 35.99, 35.11, 34.68, 34.55, 33.91, 32.91,
        31.97, 31.1, 30.32, 29.63, 29.25, 28.6, 27.96, 27.84, 27.29,
      ],
    },
  ],
};
var chartOptions = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      border: {
        display: false,
        dash: [2, 2],
        dashOffset: 200,
      },
      grid: {
        drawTicks: false,
      },
    },
  },
  borderColor: ["rgb(138,43,226)", "#dddddf"],
  elements: {
    point: {
      radius: 0,
      hitRadius: 200,
      hoverRadius: 6,
    },
    line: {
      tension: 1,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      mode: "nearest",
      intersect: false,
      displayColors: false,
      padding: 8,
      callbacks: {
        label: function (tooltipItems) {
          return "$" + tooltipItems.raw.toString();
        },
        title: function () {
          return "";
        },
      },
    },
  },
};
</script>

<template>
  <div class="main">
    <div>I am summary chart</div>
    <ChartLine
      :chartData="chartData"
      :chartOptions="chartOptions"
      chartId="SummaryChart"
    />
  </div>
</template>

<style scoped>
.main {
  background: #f7f7f9;
  border-radius: 16px;
  width: 500px;
  height: 336px;
  grid-row: 3;

  padding: 16px;
}

@media (min-width: 1200px) {
  .main {
    grid-row: 1;
  }
}
</style>
