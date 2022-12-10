<script setup>
const props = defineProps({
  size: String,
});
</script>

<template>
  <img class="img_style" src="@/assets/ThreeDotsIcon.svg" />
</template>

<style scoped>
img:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.img_style {
  width: v-bind(size);
}
</style>
