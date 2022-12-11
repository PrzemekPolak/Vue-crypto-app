<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="option_container">
    <input
      type="radio"
      :id="props.name + '_option'"
      name="radio_selection_group"
      :checked="props.name == 'Summary'"
    />
    <label :for="props.name + '_option'" class="options_label">{{
      props.name
    }}</label>
  </div>
</template>

<style scoped>
.option_container {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9896a1;
}
.option_container:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.options_label {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 0;
  color: #9896a1;
}
[type="radio"] {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + .options_label::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  border: solid 1px #7445fb;
  height: 2px;
}
[type="radio"]:checked + .options_label {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0a041c;
}
</style>
