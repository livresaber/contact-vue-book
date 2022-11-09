<script setup>
import AppHeader from '@/components/AppHeader/index.vue';
import IconBook from '@/components/Icons/IconBook.vue';
import IconPlus from '@/components/Icons/IconPlus.vue';
import AppButton from '@/components/AppButton/index.vue';
</script>

<template>
  <section class="page-home">
    <AppHeader />  
    <main>
      <IconBook class="icon-book" />
      <p>Nenhum contato foi criado ainda.</p>
      <AppButton class="create-contact" ariaLabel="Botão para criar novo contato" type="secondary">
        <IconPlus />
        Criar contato
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
    display: flex;
    align-items: center;
    flex-direction: column;
    .icon-book { margin: 6rem 0 1.5rem; }
    .create-contact {
      border-radius: 20px;
      padding: 0.75rem 1.375rem 0.75rem 1rem;
      margin-top: 1.5rem;
    }
  }
</style>
