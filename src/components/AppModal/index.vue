<script setup>
import { ref, onMounted } from 'vue'
import AppButton from '@/components/AppButton/index.vue'

const modal = ref(null)
const emit = defineEmits(['close'])

defineProps({
  ariaLabel: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

onMounted(() => {
  const firstInput = modal.value.querySelector('input:first-of-type')
  const firstButton = modal.value.querySelector('button:first-of-type')

  firstInput
    ? firstInput.focus()
    : firstButton.focus()
})
</script>

<template>
  <section
    ref="modal"
    class="app-modal"
    :aria-label="ariaLabel"
    role="dialog"
  >
    <div class="app-modal__container">
      <div class="app-modal__header">
        <h1>{{ title }}</h1>
      </div>
      <div class="app-modal__content">
        <slot></slot>
      </div>
      <div class="app-modal__footer">
        <AppButton
          :ariaLabel="`Botão para cancelar modal ${title}`"
          @click="emit('close')"
        >
          Cancelar
        </AppButton>
        <slot name="button"></slot>
      </div>
    </div>
    <div class="app-modal__overlay" @click="emit('close')"></div>
  </section>
</template>

<style lang="scss">
  .app-modal {
    position: fixed;
    background: transparent;
    width: 100%;
    height: 100%;
    border: 0;
    box-shadow: none;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 98;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .app-modal__container {
    border-radius: var(--border-radius);
    box-shadow: 0 16px 10px 0 var(--black-8-16);
    background-color: var(--white-two);
    margin: 1rem;
    z-index: 99;
    transition: .3s transform;
  }
  .app-modal__overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background: rgba(#000, .4);
    backdrop-filter: blur(3px);
  }
  .app-modal__header,
  .app-modal__footer {
    padding: 1rem;
  }
  .app-modal__header {
    border-bottom: 2px solid var(--color-border);
  }
  .app-modal__content {
    padding: 1rem 1.5rem;
  }
  .app-modal__footer {
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: flex-end;
    .app-button {
      margin-left: .5rem;
      &:first-of-type { margin-left: 0; }
    }
  }
</style>
