<script setup>
import IconSearch from '@/components/Icons/IconSearch.vue';
</script>

<template>
  <section class="app-search">
    <input
      class="app-search__field"
      type="text"
      placeholder="Buscar..."
      aria-label="Campo de pesquisa para buscar contato"
    >
    <button
      class="app-search__button"
      type="button"
      aria-label="Botão para buscar contato no campo de pesquisa"
    >
      <IconSearch class="icon" />
      Buscar contato
    </button>
  </section>
</template>

<style lang="scss">
  .app-search {
    width: 64.5rem;
    margin-left: auto;
    position: relative;
  }
  .app-search__field {
    font-size: 1rem;
    color: var(--color-bluey-grey);
    width: 100%;
    height: 2rem;
    background: var(--color-pale-grey);
    padding: 0.438rem 0.5rem 0.375rem;
    border: 0;
    border-radius: 4px;
    &:focus {
      box-shadow: 0 0 0 2px var(--color-primary);
      outline: none;
    }
  }
  .app-search__button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    font-size: 0;
    &:hover svg {
      fill: var(--color-primary);
    }
  }
</style>