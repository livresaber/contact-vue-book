<script setup>
defineProps({
  ariaLabel: {
    type: String,
    required: true
  },
  color: String,
  type: {
    type: String,
    default: 'button'
  },
  link: {
    type: String,
  },
  target: {
    type: String,
  }
})
</script>

<template>
  <template v-if="link">
    <a
      v-if="link"
      class="app-button-link"
      :class="color"
      :aria-label="ariaLabel"
      :href="link"
      :target="target"
    >
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <button
      class="app-button"
      :class="color"
      :type="type"
      :aria-label="ariaLabel"
    >
      <slot></slot>
    </button>
  </template>
</template>

<style lang="scss">
  .app-button,
  .app-button-link {
    border: 0;
    border-radius: 16px;
    color: var(--color-primary);
    cursor: pointer;
    padding: 0.5rem 1rem;
    background: transparent;
    font-weight: bold;
    transition: .3s all;
    display: inline-flex;
    align-items: center;
    min-width: fit-content;
    svg { margin-right: .5rem; }
    &:hover {
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8), 0 2px 4px 0.5px var(--black-8-16);
    }
    &.primary, &.secondary {
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 0 0 0.5px var(--black-8), inset 0 0 0 0.5px var(--black-8), 0 2px 4px 0.5px var(--black-8-16);
    }
    &.primary {
      background: var(--color-primary);
      color: var(--white-two);
    }
    &.secondary { background: var(--color-secondary); }
    &:disabled {
      opacity: .32;
      cursor: default;
    }
  }
</style>
