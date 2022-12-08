<script setup></script>

<template>
  <div class="main">
    <div style="display: flex; justify-content: space-between">
      <div class="balance_header">Current balance</div>
      <div class="three_dots">...</div>
    </div>
    <div class="money_balance">$21 432.23</div>
    <div style="display: flex; margin-top: 16px">
      <div>^</div>
      <div class="balance_change_text">12% vs last month</div>
    </div>
    <div style="display: flex; gap: 8px; margin-top: auto">
      <button class="purple_btn">Quick Invest</button>
      <button class="white_btn">Show Report</button>
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

  width: 500px;
  height: 336px;
  grid-row: 1;
}

.balance_header {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.three_dots {
  width: 16px;
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
.purple_btn {
  background: #7445fb;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  border: none;
}
.white_btn {
  background: #ffffff;
  border: 1px solid #ebebf3;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #7445fb;
}
</style>
