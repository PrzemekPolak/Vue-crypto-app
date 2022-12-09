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
  chartOptions: Object,
  chartId: String,
});

const plugins = [
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
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(0, 0, 255, 0.6)";
        ctx.stroke();
      }
    },
  },
  {
    // Fill points in legend without changing points in line
    afterDraw: function (c) {
      let legends = c.legend.legendItems;
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
        chart.ctx.fillText(value, posX + 8, posY - 8);
      }
    },
  },
];
</script>

<template>
  <Line
    :id="props.chartId"
    :options="props.chartOptions"
    :data="props.chartData"
    :plugins="plugins"
  />
</template>

<style scoped></style>
