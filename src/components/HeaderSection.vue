<script setup>
import SearchBar from "./SearchBar.vue";
import NotificationIcon from "./icons/NotificationIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
</script>

<template>
  <div class="main_div">
    <SearchBar />
    <div class="right_side_group" style="">
      <NotificationIcon />
      <MenuIcon />
    </div>
  </div>
</template>

<style scoped>
.main_div {
  display: flex;
  padding-bottom: 32px;
}
.right_side_group {
  margin-left: auto;
  display: flex;
  gap: 16px;
}
@media (max-width: 580px) {
  .main_div {
    padding: 16px 8px;
  }
  .right_side_group {
    gap: 8px;
  }
}
</style>
