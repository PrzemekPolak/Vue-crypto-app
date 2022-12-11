<script setup>
import SelectionSectionSummaryItem from "./SelectionSectionSummaryItem.vue";
</script>

<script>
export default {
  data() {
    return {
      chosenCrypto: [],
    };
  },
  methods: {
    loadData() {
      fetch("http://localhost:3000/test1")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          Object.keys(data.data).forEach((x) => {
            x = data.data[x];
            this.chosenCrypto.push([
              x.name,
              x.symbol,
              parseFloat(x.quote["USD"].price.toFixed(2)),
              parseFloat(x.quote["USD"]["percent_change_24h"].toFixed(2)),
              "bitcoinLogo",
            ]);
          });
        })
        .catch((err) => {
          // If there is some problem with api, load example data
          this.chosenCrypto = [
            ["Bitcoin", "BTC", 12005.67, 2.56, "bitcoinLogo"],
            ["Ethereum", "ETH", 3455.09, -1.27, "ethereumLogo"],
            ["Cardano", "ADA", 0.5956, 1.07, "ethereumLogo"],
            ["Cardano", "ADA", 0.5956, 1.07, "ethereumLogo"],
          ];
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div class="main_item">
    <div v-for="crypto in chosenCrypto" v-bind:key="crypto[0]">
      <SelectionSectionSummaryItem
        :cryptoName="crypto[0]"
        :cryptoShortName="crypto[1]"
        :cryptoPrice="crypto[2]"
        :cryptoChange="crypto[3]"
        :cryptoLogo="crypto[4]"
      />
    </div>
  </div>
</template>

<style scoped>
.main_item {
  width: 100%;
}
</style>
