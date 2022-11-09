<script setup>
import AppButton from '@/components/AppButton/index.vue';

const emit = defineEmits(['close'])

const props = defineProps({
  ariaLabel: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  show: {
    type: Boolean,
    default: false,
    required: true
  }
})
</script>

<template>
  <section
    v-if="show"
    class="app-modal"
    :class="{ 'show': show }"
    role="dialog"
    :aria-label="ariaLabel"
  >
    <div class="app-modal__container">
      <div class="app-modal__header">
        {{ title }}
      </div>
      <div class="app-modal__content">
        <slot></slot>
      </div>
      <div class="app-modal__footer">
        <AppButton :ariaLabel="`Botão para cancelar modal ${title}`" @click="emit('close')">
          Cancelar
        </AppButton>
        <slot name="button"></slot>          
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .app-modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(#000, .5);
    overflow: hidden;
  }
  .app-modal__container {
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 var(--black-8-16);
    background-color: var(--white-two);
    margin: 1rem;
  }
  .app-modal__header,
  .app-modal__content,
  .app-modal__footer {
    padding: 1rem;
  }
  .app-modal__header {
    border-bottom: 2px solid var(--color-border);
  }
  .app-modal__footer {
    border-top: 1px solid var(--color-border);
    display: flex;
    .app-button {
      margin-left: .5rem;
      &:first-of-type { margin-left: 0; }
    }
  }
</style>