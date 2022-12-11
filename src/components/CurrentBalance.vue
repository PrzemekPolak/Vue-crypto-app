<script setup>
import StandardButton from "./StandardButton.vue";
import ThreeDotsIcon from "./icons/ThreeDotsIcon.vue";
import ValueChangeArrowIcon from "./icons/ValueChangeArrowIcon.vue";
</script>

<template>
  <div class="main">
    <div style="display: flex; justify-content: space-between">
      <div class="balance_header">Current balance</div>
      <ThreeDotsIcon size="20px" />
    </div>
    <div class="money_balance">$21 432.23</div>
    <div style="display: flex; margin-top: 16px; gap: 8px">
      <ValueChangeArrowIcon :increaseArrow="true" size="24px" :fill="true" />
      <div class="balance_change_text">12% vs last month</div>
    </div>
    <div style="display: flex; gap: 8px; margin-top: auto">
      <StandardButton text="Quick Invest" colorTemplate="purple" />
      <StandardButton text="Show Report" colorTemplate="white" />
    </div>
  </div>
</template>

<style scoped>
.main {
  background: #f7f7f9;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  height: 336px;
  grid-row: 1;
  grid-column: 1 / span 1;
  max-width: 560px;
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

.balance_header {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
.money_balance {
  font-weight: 300;
  font-size: 56px;
  line-height: 56px;
  margin-top: 40px;
}
.money_balance:first-letter {
  color: #9896a1;
}
.balance_change_text {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #2dc78f;
}
</style>
