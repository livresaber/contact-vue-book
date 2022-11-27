<script setup>
import AppLogo from '@/components/AppLogo/index.vue'
import AppSearch from '@/components/AppSearch/index.vue'
import AppNavigation from '@/components/AppNavigation/index.vue'

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
    <AppNavigation />
  </header>
</template>

<style lang="scss">
  .app-header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 640px) {
      flex-direction: column;
      .app-navigation__btn {
        position: absolute;
        top: 2rem;
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
</style>
