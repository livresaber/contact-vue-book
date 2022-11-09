<script setup>
import AppHeader from '@/components/AppHeader/index.vue';
import AppButton from '@/components/AppButton/index.vue';
</script>

<template>
  <section class="page-home">
    <AppHeader />  
    <main>
      <h1>Home page</h1>
      <AppButton class="btn-example" ariaLabel="Botão de exemplo">
        Botão de exemplo
      </AppButton>
      <AppButton class="btn-example" ariaLabel="Botão de exemplo" type="primary">
        Botão de exemplo
      </AppButton>
      <AppButton class="btn-example" ariaLabel="Botão de exemplo" type="secondary">
        Botão de exemplo
      </AppButton>
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
    .btn-example { margin-right: .5rem; }
  }
</style>
