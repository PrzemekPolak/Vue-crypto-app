<script setup></script>

<template>
  <div>
    <img class="notification_img" src="@/assets/notificationIcon.svg" />
    <div class="red_circle"></div>
  </div>
</template>

<style scoped>
.notification_img {
  padding: 14px;
  width: 48px;
  height: 48px;
  background: #f7f7f9;
  border-radius: 8px;
}
.red_circle {
  width: 12px;
  height: 12px;
  background: #ea4d4d;
  border: 2px solid #ffffff;
  border-radius: 100%;
  position: absolute;
  top: -3px;
  right: -3px;
}
.notification_img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
