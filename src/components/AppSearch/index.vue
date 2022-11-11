<script setup>
import { ref } from 'vue'
import IconSearch from '@/components/Icons/IconSearch.vue'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()
const searchInput = ref('')
const search = () => {
  searchInput.value.length > 0
    ? contact.setFilter(contact.getListByName(searchInput))
    : contact.resetFilter()
}
</script>

<template>
  <section class="app-search">
    <input
      aria-label="Campo de pesquisa para buscar contato"
      class="app-search__field"
      placeholder="Buscar..."
      v-model="searchInput"
      @input="search"
      type="text"
    >
    <button
      aria-label="Botão para buscar contato no campo de pesquisa"
      class="app-search__button"
      @click="search"
      type="button"
    >
      <IconSearch class="icon" />
      Buscar contato
    </button>
  </section>
</template>

<style lang="scss">
  .app-search {
    width: 100%;
    margin-left: auto;
    position: relative;
    @media (max-width: 640px) {
      margin-top: 1rem;
    }
  }
  .app-search__field {
    font-size: 1rem;
    color: var(--bluey-grey);
    width: 100%;
    height: 2rem;
    background: var(--pale-grey);
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
    &:hover svg { fill: var(--color-primary); }
  }
</style>
