<script setup>
import SelectionSectionSummaryItem from "./SelectionSectionSummaryItem.vue";
import axios from "axios";
</script>

<script>
export default {
  data() {
    return {
      chosenCrypto: [],
      cryptoList: [1, 2, 3, 4],
    };
  },
  methods: {
    loadData() {
      var config = {
        method: "get",
        url: "http://localhost:4000/getData/" + this.cryptoList.join(),
      };

      axios(config)
        .then((response) => {
          var data = response.data.response.data;

          Object.keys(data).forEach((x) => {
            var crypto = data[x];
            this.chosenCrypto.push([
              crypto.name,
              crypto.symbol,
              parseFloat(crypto.quote["USD"].price.toFixed(2)),
              parseFloat(crypto.quote["USD"]["percent_change_24h"].toFixed(2)),
              "https://s2.coinmarketcap.com/static/img/coins/64x64/" +
                x +
                ".png",
            ]);
          });
        })
        .catch((err) => {
          // If there is some problem with api, load example data
          this.chosenCrypto = [
            [
              "Bitcoin",
              "BTC",
              12005.67,
              2.56,
              "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
            ],
            [
              "Ethereum",
              "ETH",
              3455.09,
              -1.27,
              "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
            ],
            [
              "Litecoin",
              "LTC",
              1734.09,
              3.27,
              "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
            ],
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
