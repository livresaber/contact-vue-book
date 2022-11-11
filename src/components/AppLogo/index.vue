<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-logo" role="img" aria-label="Logos Vue e Ubook">
    <RouterLink to="/about">
      <img alt="Vue logo" class="logo-vue" src="@/assets/logo.svg" width="32" height="32" />
    </RouterLink>
    <RouterLink to="/">
      <img alt="Ubook logo" class="logo-book" src="@/assets/ic-logo.svg" width="148" height="32" />
    </RouterLink>
  </div>
</template>

<style lang="scss">
  .app-logo {
    display: flex;
    a {
      display: flex;
    }
  }
  .logo-vue { margin-right: 1rem; }
  .logo-book { margin-right: 1rem; }
</style>
