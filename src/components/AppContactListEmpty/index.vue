<script setup>
import AppButton from '@/components/AppButton/index.vue'
import IconBook from '@/components/Icons/IconBook.vue'
import IconPlus from '@/components/Icons/IconPlus.vue'

import { useContactStore } from '@/stores/contact'

const contact = useContactStore()
</script>

<template>
  <IconBook class="icon-book" />
  <p>Crie uma lista de contatos de forma uma simples</p>
  <AppButton
    class="create-contact"
    ariaLabel="Botão para criar novo contato"
    @click="contact.$patch({ modalNewContact: true })"
    color="primary"
  >
    <IconPlus />
    Novo Contato
  </AppButton>
</template>

<style lang="scss" scoped>
  .icon-book { margin: 6rem 0 1.5rem; }
  .create-contact {
    border-radius: var(--border-radius);
    padding: 0.75rem 1.375rem 0.75rem 1rem;
    margin-top: 1.5rem;
    max-width: 150px;
  }
  p {
    padding: .2rem .5rem;
    border-radius: 10px;
    margin: .2rem;
    background: #fff;
    display: inline-block;
  }
</style>
