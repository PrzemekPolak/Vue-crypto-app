<script setup>
import SearchBar from "./SearchBar.vue";
import NotificationIcon from "./NotificationIcon.vue";
import MenuIcon from "./MenuIcon.vue";
</script>

<template>
  <div class="main">
    <SearchBar />
    <div style="margin-left: auto; display: flex; gap: 16px;">
      <NotificationIcon />
      <MenuIcon />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  padding-top: 48px;
  padding-bottom: 32px;
}
</style>
