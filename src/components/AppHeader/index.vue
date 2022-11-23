<script setup>
import AppLogo from '@/components/AppLogo/index.vue'
import AppButton from '@/components/AppButton/index.vue'
import IconPlus from '@/components/Icons/IconPlus.vue'
import AppSearch from '@/components/AppSearch/index.vue'
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
    </div>
  </header>
</template>

<style lang="scss">
  .app-header {
    padding: 1rem;
    display: flex;
  }
  .app-header__box {
    display: flex;
    width: 100%;
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
</style>
