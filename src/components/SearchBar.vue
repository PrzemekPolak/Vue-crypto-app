<script setup></script>

<template>
  <div class="search_main">
    <img src="@/assets/searchIcon.png" />
    <input type="text" name="searchInput" placeholder="Search" />
  </div>
</template>

<style scoped>
.search_main {
  display: flex;
  background: #f7f7f9;
  color: #9896a1;
  border-radius: 8px;
  width: 232px;
  height: 48px;
  padding: 16px;
}
input {
  background: #f7f7f9;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-left: 8px;
}
input:focus-visible {
  outline: none;
}
</style>
