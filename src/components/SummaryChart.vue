<script setup>
import ChartLineTwoDatasets from "./ChartLineTwoDatasets.vue";
import ThreeDotsIcon from "./icons/ThreeDotsIcon.vue";
</script>

<script>
export default {
  data() {
    return {
      chartDatasets: [],
      chartLabels: [],
      lineColors: ["rgb(116,69,251)", "#858585"],
      loaded: false,
    };
  },
  methods: {
    convertTime(UNIX_timestamp) {
      var date = new Date(UNIX_timestamp);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var month = months[date.getMonth()];
      var day = date.getDate();
      return day + " " + month;
    },
    loadData() {
      this.loaded = false;
      fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=30&interval=daily"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject();
          }
        })
        .then((data) => {
          var chartDatasets = [];
          var chartLabels = [];
          data.prices.forEach((x) => {
            chartDatasets.push((x[1] / 1000).toFixed(2));
            chartLabels.push(this.convertTime(x[0]));
          });
          this.chartDatasets.push(chartDatasets);
          this.chartLabels = chartLabels;

          this.chartDatasets.push([...chartDatasets].reverse());
          this.loaded = true;
        })
        .catch((err) => {
          // If there is some problem with api, load example data
          this.chartDatasets = [
            [16.93, 5, 9.09, 22.87, 25.41, 12.87, 15.22, 4.05],
            [16.93, 5, 9.09, 22.87, 25.41, 12.87, 15.22, 4.05].reverse(),
          ];
          this.chartLabels = [
            "May 1",
            "May 5",
            "May 9",
            "May 13",
            "May 17",
            "May 21",
            "May 25",
            "May 29",
          ];
          this.loaded = true;
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div class="main">
    <div style="display: flex; justify-content: space-between">
      <div class="header_text">Summary</div>
      <ThreeDotsIcon size="20px" />
    </div>
    <div style="width: 99%; height: 100%">
      <ChartLineTwoDatasets
        v-if="loaded"
        :chartDatasets="chartDatasets"
        :chartLabels="chartLabels"
        :lineColors="lineColors"
      />
    </div>
  </div>
</template>

<style scoped>
.main {
  background: #f7f7f9;
  border-radius: 16px;
  height: 336px;
  grid-row: 3;
  padding: 32px;
  max-width: 560px;
}
@media (min-width: 1200px) {
  .main {
    grid-row: 1;
    grid-column: 2 / span 1;
  }
}
.header_text {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
@media (max-width: 1200px) {
  .main {
    margin: auto;
  }
  .main:after {
    content: "";
    display: block;
    width: 100vw;
    margin-left: calc(-30vw);
    z-index: -1;
  }
}
@media (max-width: 580px) {
  .main {
    margin: 0;
  }
  .main:after {
    content: none;
  }
}
</style>
