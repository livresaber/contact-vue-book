<script setup>
import AppLogo from '@/components/AppLogo/index.vue'
import AppSearch from '@/components/AppSearch/index.vue'

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
    @media (max-width: 640px) {
      flex-direction: column;
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
