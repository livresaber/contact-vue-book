<script setup>
import AppSearch from '@/components/AppSearch/index.vue';
</script>

<template>
  <header class="app-header">
    <img alt="Vue logo" class="logo-vue" src="@/assets/logo.svg" width="32" height="32" />
    <img alt="Ubook logo" class="logo-book" src="@/assets/ic-logo.svg" width="148" height="32" />
    <AppSearch />
  </header>
</template>

<style lang="scss">
  .app-header {
    padding: 1rem;
    display: flex;
  }
  .logo-vue {
    margin-right: 1rem;
  }
  .logo-book {
    margin-right: 1rem;
  }
</style>