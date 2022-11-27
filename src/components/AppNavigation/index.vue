<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconHome from '@/components/Icons/IconHome.vue'
import IconAbout from '@/components/Icons/IconAbout.vue'
import IconMenu from '@/components/Icons/IconMenu.vue'

const menu = ref(false)

const toggleMenu = () => menu.value = !menu.value
</script>

<template>
  <button class="app-navigation__btn" @click="toggleMenu">
    <IconMenu />
  </button>
  <nav class="app-navigation__content" :class="{ active: menu }" @click="toggleMenu">
    <ul>
      <li>
        <RouterLink to="/">
          <IconHome />
          Início
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/about">
          <IconAbout />
          Sobre
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.app-navigation__btn {
  margin-left: 1rem;
  cursor: pointer;
  background: transparent;
  border: 0;
}

.app-navigation__content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: none;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px) brightness(0.5);

  &.active {
    display: flex;
  }

  li:last-of-type a {
    margin-bottom: 0;
  }

  a {
    width: 100%;
    display: flex;
    background: #fff;
    padding: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: var(--border-radius);
    min-width: 150px;
    user-select: none;

    svg {
      margin-right: 1rem;
    }
  }
}
</style>
