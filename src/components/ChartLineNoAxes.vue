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
  chartData: Object,
  chartLabels: Object,
  chartLineColor: String,
});

var chartData = {
  labels: props.chartLabels,
  datasets: [
    {
      borderColor: props.chartLineColor,
      data: props.chartData,
    },
  ],
};
var chartOptions = {
  responsive: true,
  aspectRatio: 2 | 1,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
</script>

<template>
  <Line
    :options="chartOptions"
    :data="chartData"
  />
</template>

<style scoped></style>
