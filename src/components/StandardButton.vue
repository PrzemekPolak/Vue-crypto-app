<script setup>
const props = defineProps({
  text: String,
  colorTemplate: String,
});
</script>

<template>
  <button :class="props.colorTemplate" class="standard_btn">
    {{ props.text }}
  </button>
</template>

<style scoped>
button:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.standard_btn {
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}
.purple {
  background: #7445fb;
  color: #ffffff;
  border: none;
}
.white {
  background: #ffffff;
  border: 1px solid #ebebf3;
  color: #7445fb;
}
</style>
