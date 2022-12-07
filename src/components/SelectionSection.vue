<script setup>
import SelectionSectionSummary from "./SelectionSectionItems/SelectionSectionSummary.vue";
import SelectionSectionTable from "./SelectionSectionItems/SelectionSectionTable.vue";
import SelectionSectionCharts from "./SelectionSectionItems/SelectionSectionCharts.vue";
import SelectionSectionReporting from "./SelectionSectionItems/SelectionSectionReporting.vue";
import SelectionSectionAnalysis from "./SelectionSectionItems/SelectionSectionAnalysis.vue";

import { ref } from "vue";

var visibleSelectionItem = ref(1);
</script>

<template>
  <div class="main">
    <div>I am selection table</div>
    <div class="selecion_options">
      <div @click="visibleSelectionItem = 1">Summary</div>
      <div @click="visibleSelectionItem = 2">Table</div>
      <div @click="visibleSelectionItem = 3">Charts</div>
      <div @click="visibleSelectionItem = 4">Reporting</div>
      <div @click="visibleSelectionItem = 5">Analysis</div>
    </div>

    <SelectionSectionSummary v-if="visibleSelectionItem == 1" />
    <SelectionSectionTable v-if="visibleSelectionItem == 2" />
    <SelectionSectionCharts v-if="visibleSelectionItem == 3" />
    <SelectionSectionReporting v-if="visibleSelectionItem == 4" />
    <SelectionSectionAnalysis v-if="visibleSelectionItem == 5" />
  </div>
</template>

<style scoped>
.main {
  background: #F7F7F9;
  border-radius: 16px;
  padding: 32px 32px;
  grid-row: 2;
  grid-column: 1 / span 2;

}

.selecion_options {
  display: flex;
  gap: 24px;
}

.selecion_options > div {
  color: red;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9896A1;
}
</style>
