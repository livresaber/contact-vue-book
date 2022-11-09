<script setup>
import AppButton from '@/components/AppButton/index.vue';
import IconPlus from '@/components/Icons/IconPlus.vue';
import AppSearch from '@/components/AppSearch/index.vue';
</script>

<template>
  <header class="app-header">
    <img alt="Vue logo" class="logo-vue" src="@/assets/logo.svg" width="32" height="32" />
    <img alt="Ubook logo" class="logo-book" src="@/assets/ic-logo.svg" width="148" height="32" />
    <AppButton class="create-contact" ariaLabel="Botão para criar novo contato" type="secondary">
      <IconPlus />
      Criar contato
    </AppButton>
    <AppSearch />
  </header>
</template>

<style lang="scss">
  .app-header {
    padding: 1rem;
    display: flex;
    .create-contact { margin: 0 1.5rem; }
  }
  .logo-vue {
    margin-right: 1rem;
  }
  .logo-book {
    margin-right: 1rem;
  }
</style>