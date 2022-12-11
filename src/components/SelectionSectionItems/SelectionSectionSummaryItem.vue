<script setup>
import ChartLineNoAxes from "../ChartLineNoAxes.vue";
import StandardButton from "../StandardButton.vue";
import ValueChangeArrowIcon from "../icons/ValueChangeArrowIcon.vue";

const props = defineProps({
  cryptoName: String,
  cryptoShortName: String,
  cryptoPrice: Number,
  cryptoChange: Number,
  cryptoLogo: String,
});

// For presentation purpose (to avoid too many API calls in free APIs)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
var chartData = shuffleArray([
  16.93, 5, 9.09, 22.87, 25.41, 12.87, 15.22, 4.05,
]);
var chartLabels = [
  "May 1",
  "May 5",
  "May 9",
  "May 13",
  "May 17",
  "May 21",
  "May 25",
  "May 29",
];
</script>

<template>
  <div class="main_item">
    <div class="item_left_group">
      <img
        class="crypto_img"
        :src="props.cryptoLogo"
      />
      <div class="text_data">
        <div class="text_group">
          <div class="label_el">{{ props.cryptoShortName }}</div>
          <div class="value_el">{{ props.cryptoName }}</div>
        </div>
        <div class="text_group">
          <div class="label_el">Price</div>
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
            <ValueChangeArrowIcon
              :increaseArrow="props.cryptoChange > 0"
              size="14px"
              :fill="false"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="chart_style">
      <ChartLineNoAxes
        :chartData="chartData"
        :chartLabels="chartLabels"
        :chartLineColor="props.cryptoChange > 0 ? '#2dc78f' : '#ea4d4d'"
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
  margin-right: 16px;
}
.text_group {
  align-self: center;
}
.btn_group {
  display: flex;
  gap: 8px;
}
.chart_style {
  min-width: 140px;
}
.text_data {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.item_left_group {
  width: 45%;
  display: flex;
}
@media (max-width: 1000px) {
  .text_data {
    display: block;
  }
  .text_group {
    display: flex;
  }
  .btn_group {
    align-self: center;
  }
  .chart_style {
    max-width: 160px;
    align-self: center;
    position: absolute;
    top: 10;
    left: 50%;
  }
  .item_left_group {
    width: unset;
  }
}
@media (max-width: 800px) {
  .main_item {
    width: 100%;
    height: auto;
    flex-direction: column;
    place-items: center;
    gap: 8px;
  }
  .chart_style {
    max-width: 200px;
    position: unset;
  }
}
</style>
