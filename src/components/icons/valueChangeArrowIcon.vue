<script setup>
const props = defineProps({
  increaseArrow: Boolean,
  size: String,
  fill: Boolean,
});
</script>

<template>
  <img
    v-if="increaseArrow"
    class="img_style"
    :src="
      props.fill
        ? '@/assets/increaseArrowIconFull.png'
        : '@/assets/increaseArrowIcon.png'
    "
  />
  <img
    v-else
    class="img_style"
    :src="
      props.fill
        ? '@/assets/decreaseArrowIconFull.png'
        : '@/assets/decreaseArrowIcon.png'
    "
  />
  <img v-else class="img_style" :src="props.fill ? 'src/assets/decreaseArrowIconFull.png' : 'src/assets/decreaseArrowIcon.png'" />
</template>

<style scoped>
.img_style {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
