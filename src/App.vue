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
    <div class="main_content">
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
  border-radius: 16px;
  padding: 48px 68px;
  padding-right: 68px;
}
.main_content {
  display: grid;
  gap: 32px;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
}
@media (max-width: 580px) {
  main {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
}
</style>
