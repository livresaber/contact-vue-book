<script setup>
let emit = defineEmits(['update:modelValue'])
defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
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
  },
  maxlength: {
    type: String
  },
  v: {
    type: Object
  }
})
</script>

<template>
  <label class="app-input__label">
    {{ title }}
    <template v-if="type === 'tel'">
      <input
        :name="name"
        class="app-input__input"
        :class="{ 'error': v.$errors.length }"
        @input="emit('update:modelValue', $event.target.value)"
        v-maska="['(##) ####-####', '(##) #####-####']"
        :value="modelValue"
        :type="type"
      >
    </template>
    <template v-else>
      <input
        :name="name"
        class="app-input__input"
        :class="{ 'error': v.$errors.length }"
        @input="emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :type="type"
        :maxlength="maxlength"
      >
    </template>
  </label>
  <div
    class="app-input__errors"
    v-for="error of v.$errors"
    :key="error.$uid"
    role="alert"
  >
    <p class="app-input__error-msg">
      {{ error.$message }}
    </p>
  </div>
</template>

<style lang="scss">
  .app-input__label {
    width: v-bind(width);
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
    &.error {
      border-color: var(--color-red);
      box-shadow: 0 2px 10px var(--color-red);
    }
  }
  .app-input__errors {
    width: 100%;
    display: flex;
    padding: .3rem;
  }
  .app-input__error-msg {
    font-size: 0.7rem;
    color: var(--color-red);
  }
</style>
