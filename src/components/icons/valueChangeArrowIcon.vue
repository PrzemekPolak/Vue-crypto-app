<script setup>
const props = defineProps({
  increaseArrow: Boolean,
  size: String,
});
</script>

<template>
  <img
    v-if="increaseArrow"
    class="img_style"
    src="@/assets/increaseArrowIcon.png"
  />
  <img v-else class="img_style" src="@/assets/decreaseArrowIcon.png" />
</template>

<style scoped>
.img_style {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
