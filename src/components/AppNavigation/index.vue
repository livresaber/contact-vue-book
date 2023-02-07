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
  <button
    class="app-navigation__btn"
    @click="toggleMenu"
    aria-label="Botão para abrir navegação menu"
  >
    <IconMenu />
  </button>
  <nav class="app-navigation__content" :class="{ active: menu }" @click="toggleMenu" role="menu">
    <ul class="app-navigation__menu-list">
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
  margin-left: .5rem;
  cursor: pointer;
  background: #fff;
  border: 0;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  min-width: 50px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  align-items: start;
  backdrop-filter: blur(5px) brightness(0.5);
  &.active { display: flex; }
}

.app-navigation__menu-list {
  flex: 1;
  padding: 1rem;
  max-width: 20rem;
  li:last-of-type a { margin-bottom: 0; }

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
    svg { margin-right: 1rem; }
  }
}
</style>
