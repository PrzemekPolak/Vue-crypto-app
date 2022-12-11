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
  <div class="main_div">
    <div class="selecion_options">
      <div v-for="option in Object.keys(options)" v-bind:key="option">
        <SelectionSectionOption
          :name="option"
          @click="visibleSelectionItem = option"
        />
      </div>
    </div>
    <KeepAlive>
      <component :is="options[visibleSelectionItem]" />
    </KeepAlive>
    <div class="lower_opacity"></div>
  </div>
</template>

<style scoped>
.main_div {
  background: #f7f7f9;
  border-radius: 16px;
  padding: 32px 32px 0 32px;
  grid-row: 2;
  grid-column: 1 / span 2;
}
@media (max-width: 1200px) {
  .main_div {
    grid-column: 1;
  }
}
@media (max-width: 580px) {
  .main_div {
    padding: 16px 8px;
  }
  .selecion_options {
    gap: 12px !important;
  }
}

.selecion_options {
  display: flex;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebf3;
  margin-bottom: 32px;
}
.lower_opacity {
  position: sticky;
  bottom: 0;
  height: 32px;
}
.lower_opacity:after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #f7f7f9 100%);
}
</style>
