<script setup>
import SelectionSectionSummaryItem from "./SelectionSectionSummaryItem.vue";

var chosenCrypto = [
  ["Bitcoin", "BTC", 12005.67, 2.56],
  ["Ethereum", "ETH", 3455.09, 1.27],
];
</script>

<template>
  <div class="main_item">
    <div v-for="crypto in chosenCrypto" v-bind:key="chosenCrypto[0]">
      <SelectionSectionSummaryItem
        :cryptoName="crypto[0]"
        :cryptoShortName="crypto[1]"
        :cryptoPrice="crypto[2]"
        :cryptoChange="crypto[3]"
      />
    </div>
  </div>
</template>

<style scoped>
.main_item {
  width: 100%;
}
</style>
