<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  width: {
    type: String
  }
})

let emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="app-input__label" :style="{'width': width }">
    {{ title }}
    <input
      class="app-input__input"
      @input="emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :type="type"
    >
  </label>
</template>

<style lang="scss">
  .app-input__label {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: .5rem 0;
    font-size: 0.875rem;
    color: var(--dark);
  }
  .app-input__input {
    border-radius: 4px;
    border: solid 1px var(--color-border);
    background-color: var(--white-two);
    padding: .5rem;
  }
</style>