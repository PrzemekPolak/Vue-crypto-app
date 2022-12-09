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
  margin-bottom: 16px;
}
.options_label {
  padding: 8px;
}
[type="radio"] {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + .options_label::after {
  content: "";
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 100%;
  border: solid 2px black;
}
</style>
