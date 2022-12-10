<script setup>
import ChartLine from "../ChartLine.vue";
import StandardButton from "../StandardButton.vue";
import valueChangeArrowIcon from "../icons/valueChangeArrowIcon.vue";

const props = defineProps({
  cryptoName: String,
  cryptoShortName: String,
  cryptoPrice: Number,
  cryptoChange: Number,
  cryptoLogo: String,
});

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
  ],
  datasets: [
    {
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
  borderColor: "#FF0000",
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
  <div class="main_item">
    <img class="crypto_img" :src="'src/assets/' + props.cryptoLogo + '.png'" />
    <div class="text_group">
      <div class="label_el">{{ props.cryptoShortName }}</div>
      <div class="value_el">{{ props.cryptoName }}</div>
    </div>
    <div class="text_group">
      <div class="label_el">price</div>
      <div class="value_el">${{ props.cryptoPrice }}</div>
    </div>
    <div class="text_group">
      <div class="label_el">Change</div>
      <div class="flex">
        <div
          class="change_el"
          :class="props.cryptoChange > 0 ? 'green' : 'red'"
        >
          {{ props.cryptoChange > 0 ? "+ " : "- "
          }}{{ Math.abs(props.cryptoChange) }}%
        </div>
        <valueChangeArrowIcon
          :increaseArrow="props.cryptoChange > 0"
          size="14px"
        />
      </div>
    </div>
    <div class="chart_style">
      <ChartLine
        :chartData="chartData"
        :chartOptions="chartOptions"
        chartId="SelectionChart"
        :useCustomPlugins="false"
      />
    </div>
    <div class="btn_group">
      <StandardButton text="Sell" colorTemplate="white" />
      <StandardButton text="Buy" colorTemplate="purple" />
    </div>
  </div>
</template>

<style scoped>
.main_item {
  width: 100%;
  height: 90px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background: #ffffff;
  margin-bottom: 8px;
  border: 1px solid #ebebf3;
  border-radius: 8px;
}
.label_el {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #9896a1;
  margin-bottom: 6px;
  width: 100px;
}
.value_el {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #0a041c;
}
.change_el {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  margin-right: 4px;
}
.red {
  color: #ea4d4d;
}
.green {
  color: #2dc78f;
}
.crypto_img {
  width: 48px;
  height: 48px;
}
.text_group {
  align-self: center;
}
.btn_group {
  display: flex;
  gap: 8px;
}
@media (max-width: 1000px) {
  .main_item {
    flex-direction: column;
    height: auto;
  }
  .text_group {
    display: flex;
    align-self: start;
  }
  .crypto_img {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .btn_group {
    align-self: center;
  }
  .chart_style {
    max-width: 150px;
    align-self: center;
    position: absolute;
    top: 10;
    left: 50%;
  }
}
@media (max-width: 700px) {
  .chart_style {
    max-width: 200px;
    align-self: center;
    position: unset;
  }
}
</style>
