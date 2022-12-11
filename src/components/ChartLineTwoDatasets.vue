<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

const props = defineProps({
  chartDatasets: Object,
  chartLabels: Object,
  lineColors: Object,
});

let plugins = [
  {
    // Draw verticle line on hover
    afterDraw: (chart) => {
      if (chart.tooltip._active.length) {
        let posX = chart.tooltip._active[0].element.x;
        let posY = chart.tooltip._active[0].element.y;
        let yAxis = chart.scales.y;
        let ctx = chart.ctx;
        ctx.beginPath();
        ctx.moveTo(posX, posY);
        ctx.lineTo(posX, yAxis.bottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = chart.legend.legendItems[1].strokeStyle;
        ctx.stroke();
      }
    },
  },
  {
    // Fill points in legend without changing points in line
    afterDraw: function (chart) {
      let legends = chart.legend.legendItems;
      legends.forEach(function (e) {
        let pointColor = e.strokeStyle;
        e.fillStyle = pointColor;
      });
    },
  },
  {
    // Display second tooltip with x-axis data on bottom
    afterDraw: (chart) => {
      if (chart.tooltip._active.length) {
        let value = chart.data.labels[chart.tooltip._active[0].index];
        let posX = chart.tooltip._active[0].element.x;
        let posY = chart.scales.y.bottom;
        chart.ctx.font = "12px SF Pro Display";
        chart.ctx.fillText(value, posX + 7, posY - 7);
      }
    },
  },
];

var chartData = {
  labels: props.chartLabels,
  datasets: [
    {
      borderColor: props.lineColors[0],
      pointBorderColor: props.lineColors[0],
      pointBackgroundColor: "#FFFFFF",
      label: "This month",
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart;
        const gradient = canvas.ctx.createLinearGradient(
          0,
          0,
          0,
          canvas.height
        );
        gradient.addColorStop(0, props.lineColors[0].slice(0, -1)+",0.5)");
        gradient.addColorStop(0.6, props.lineColors[0].slice(0, -1)+",0.1)");
        gradient.addColorStop(1, props.lineColors[0].slice(0, -1)+",0)");
        return gradient;
      },
      data: props.chartDatasets[0],
    },
    {
      borderColor: props.lineColors[1],
      pointBorderColor: props.lineColors[1],
      pointBackgroundColor: "#FFFFFF",
      label: "Last month",
      borderDash: [10, 5],
      data: props.chartDatasets[1],
    },
  ],
};
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      offset: true,
      border: {
        display: false,
        dash: [2, 6],
        dashOffset: 200,
      },
      grid: {
        drawTicks: false,
        lineWidth: 2,
      },
      ticks: {
        font: {
          size: 10,
        },
        min: 7,
        maxTicksLimit: 8,
        callback: function (val) {
          return val + "k";
        },
      },
    },
  },
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
        pointStyleWidth: 8,
        boxHeight: 6,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      mode: "nearest",
      intersect: false,
      displayColors: false,
      padding: 10,
      callbacks: {
        label: function (tooltipItems) {
          return "$" + tooltipItems.raw.toString() + "k";
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
  <Line
    :options="chartOptions"
    :data="chartData"
    :plugins="plugins"
  />
</template>

<style scoped></style>
