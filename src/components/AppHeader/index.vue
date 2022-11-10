<script setup>
import AppLogo from '@/components/AppLogo/index.vue'
import AppButton from '@/components/AppButton/index.vue'
import IconPlus from '@/components/Icons/IconPlus.vue'
import AppSearch from '@/components/AppSearch/index.vue'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()
</script>

<template>
  <header class="app-header">
    <AppLogo />
    <div class="app-header__box">
      <AppButton
        v-if="contact.list.length > 0"
        class="create-contact"
        ariaLabel="Botão para criar novo contato"
        @click="contact.$patch({ modalNewContact: true })"
        color="secondary"
      >
        <IconPlus />
        Criar contato
      </AppButton>
      <AppSearch />
    </div>
  </header>
</template>

<style lang="scss">
  .app-header {
    padding: 1rem;
    display: flex;
    .create-contact { margin: 0 1.5rem; }
    @media (max-width: 640px) {
      flex-direction: column;
      .create-contact {
        margin: 1rem 0;
        justify-content: center;
      }
    }
  }
  .app-header__box {
    display: flex;
    width: 100%;
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
</style>
