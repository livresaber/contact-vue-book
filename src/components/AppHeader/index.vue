<script setup>
import AppLogo from '@/components/AppLogo/index.vue'
import AppSearch from '@/components/AppSearch/index.vue'
import AppNavigation from '@/components/AppNavigation/index.vue'
import AppButton from '@/components/AppButton/index.vue'
import IconPlus from '@/components/Icons/IconPlus.vue'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

defineProps({
  type: {
    type: String
  },
})
</script>

<template>
  <header class="app-header">
    <AppLogo />
    <div v-if="type == 'home'" class="app-header__box">
      <AppSearch />
      <AppButton
        v-if="contact.list.length > 0"
        class="create-contact"
        ariaLabel="Botão para criar novo contato"
        @click="contact.$patch({ modalNewContact: true })"
        color="primary"
      >
        <IconPlus />
        Criar contato
      </AppButton>
    </div>
    <AppNavigation />
  </header>
</template>

<style lang="scss">
.app-header {
  padding: 1rem 1rem .5rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    .app-navigation__btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
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

.create-contact {
  justify-content: center;
  margin: .5rem 0 .5rem 1rem;
  width: 100%;
  max-width: 100px;
  @media (max-width: 640px) {
    max-width: none;
    margin: 1rem 0 0;
  }
}
</style>
