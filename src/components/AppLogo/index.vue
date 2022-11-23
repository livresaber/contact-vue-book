<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-logo" role="img" aria-label="Logos Vue e Ubook">
    <RouterLink to="/">
      <img alt="Vue logo" class="logo-vue" src="@/assets/logo.svg" width="32" height="32" />
      <span>Contact Book</span>
    </RouterLink>
  </div>
</template>

<style lang="scss">
  .app-logo {
    display: flex;
    a {
      display: inline-flex;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
      font-size: 2rem;
      align-items: center;
      margin-right: 1rem;
      span { min-width: max-content; }
    }
  }
  .logo-vue { margin-right: 1rem; }
</style>
