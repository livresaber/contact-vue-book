<script setup>
defineProps({
  ariaLabel: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="app-avatar"
    :aria-label="ariaLabel"
    role="img"
  >
    <span>
      {{ name[0].toUpperCase() }}
    </span>
  </div>
</template>

<style lang="scss">
  .app-avatar {
    border-radius: 100px;
    width: 1.5rem;
    height: 1.5rem;
    background: v-bind(color);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: var(--white-two);
      transform: translateY(2px);
    }
  }
</style>
