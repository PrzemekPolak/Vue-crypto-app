<script setup>
import SummaryChart from "./components/SummaryChart.vue";
import CurrentBalance from "./components/CurrentBalance.vue";
import SelectionSection from "./components/SelectionSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<template>
  <main>
    <div>
      <HeaderSection />
    </div>
    <div
      style="
        display: grid;
        gap: 32px;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
      "
    >
      <CurrentBalance />
      <SummaryChart />
      <SelectionSection />
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: white;
  color: #0a041c;

  padding-left: 68px;
  padding-right: 68px;
}
@media (max-width: 580px) {
  main {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
