<script setup>
import AppHeader from '@/components/AppHeader/index.vue';
</script>

<template>
  <section class="page-home">
    <AppHeader />  
    <main>
      <h1>Home page</h1>
    </main>
  </section>
</template>

<style lang="scss">
  .page-home {
    max-width: 90rem;
    margin: 0 auto;
  }
  main {
    padding: 1rem;
  }
</style>
