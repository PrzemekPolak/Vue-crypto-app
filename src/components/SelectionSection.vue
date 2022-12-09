<script setup>
import SelectionSectionSummary from "./SelectionSectionItems/SelectionSectionSummary.vue";
import SelectionSectionTable from "./SelectionSectionItems/SelectionSectionTable.vue";
import SelectionSectionCharts from "./SelectionSectionItems/SelectionSectionCharts.vue";
import SelectionSectionReporting from "./SelectionSectionItems/SelectionSectionReporting.vue";
import SelectionSectionAnalysis from "./SelectionSectionItems/SelectionSectionAnalysis.vue";
import SelectionSectionOption from "./SelectionSectionOption.vue";
import { ref } from "vue";

var visibleSelectionItem = ref("Summary");
var options = {
  Summary: SelectionSectionSummary,
  Table: SelectionSectionTable,
  Charts: SelectionSectionCharts,
  Reporting: SelectionSectionReporting,
  Analysis: SelectionSectionAnalysis,
};
</script>

<template>
  <div class="main">
    <div class="selecion_options">
      <div v-for="option in Object.keys(options)" v-bind:key="option">
        <SelectionSectionOption
          :name="option"
          @click="visibleSelectionItem = option"
        />
      </div>
    </div>
    <component :is="options[visibleSelectionItem]" />
  </div>
</template>

<style scoped>
.main {
  background: #f7f7f9;
  border-radius: 16px;
  padding: 32px 32px;
  grid-row: 2;
  grid-column: 1 / span 2;
}
.selecion_options {
  display: flex;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #EBEBF3;
  margin-bottom: 32px;
}
</style>
