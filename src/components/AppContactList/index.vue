<script setup>
import AppButton from '@/components/AppButton/index.vue'
import AppAvatar from '@/components/AppAvatar/index.vue'
import IconEdit from '@/components/Icons/IconEdit.vue'
import IconPlus from '@/components/Icons/IconPlus.vue'
import IconDelete from '@/components/Icons/IconDelete.vue'

import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const emit = defineEmits(['edit', 'delete'])
defineProps({
  list: {
    type: Array,
    required: true
  },
  type: String
})
</script>

<template>
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
  <section class="contact-list">
    <TransitionGroup class="contact-list__content" name="list" tag="ul">
      <li class="contact-list__item" v-for="item of list" :key="item.id">
        <div class="item__avatar">
          <AppAvatar
            :aria-label="`Avatar com a primeira letra do contato ${item.name}`"
            :name="item.name"
            :color="item.color"
          />
        </div>
        <span class="item__title">{{ item.name }}</span>
        <span class="item__email">{{ item.email }}</span>
        <span class="item__phone">{{ item.phone }}</span>
        <div class="item__action">
          <button
            class="btn-action edit"
            @click="emit('edit', item)"
            :aria-label="`Botão para edição do contato ${item.name}`"
          >
            <IconEdit />
            Editar
          </button>
          <button
            class="btn-action delete"
            @click="emit('delete', item)"
            :aria-label="`Botão para exclusão do contato ${item.name}`"
          >
            <IconDelete />
            Excluir
          </button>
        </div>
      </li>
    </TransitionGroup>
  </section>
</template>

<style lang="scss">
  .create-contact {
    justify-content: center;
    margin: 0 0 1rem;
    width: 100%;
  }

  .contact-list {
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--white-two);
    border: solid var(--color-border) 1px;
  }

  .contact-list__header {
    padding: 1rem 1rem .3rem;
    display: flex;
    border-bottom: solid var(--color-border) 1px;
    span {
      font-size: 0.813rem;
      color: var(--color-secondary-light);
      flex: 1;
      &:first-of-type { width: 32px; }
      &:last-of-type { width: 58px; }
      &:first-of-type,
      &:last-of-type {
        padding: 0;
        font-size: 0;
        flex: none;
      }
    }
    @media (max-width: 640px) {
      display: none;
    }
  }

  .contact-list__item {
    padding: .5rem;
    font-size: 0.875rem;
    display: flex;
    border-top: solid 1px var(--white);
    transition: .3s all;
    &:hover {
      background-color: var(--color-primary-light);
      .item__title,
      .item__email,
      .item__phone,
      .item__action {
        background-color: var(--color-primary-light);
      }
    }
    &:first-of-type {
      border-radius: 0 0 var(--border-radius) var(--border-radius);
      border-top: 0;
    }
    &:last-of-type { border-radius: 0 0 var(--border-radius) var(--border-radius); }
    @media (max-width: 640px) {
      flex-direction: column;
      flex: auto;
    }
  }

  .item__title, .item__email, .item__phone {
    transition: .3s all;
    flex: 1;
    background-color: var(--white-two);
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item__email {
    min-width: 120px;
    margin-right: 1rem;
  }
  .item__avatar { margin-right: 1rem; }
  .item__phone {
    min-width: 120px;
    padding-left: .5rem;
    @media (max-width: 960px) {
      max-width: 120px;
    }
  }

  @media (max-width: 640px) {
    .item__title {
      position: absolute;
      top: 0.5rem;
      left: 2.5rem;
    }
    .item__email { margin: .5rem 0 0; }
    .item__avatar { margin-right: 0; }
    .item__phone { padding: 0; }
  }

  .item__action {
    padding: 0;
    font-size: 0;
    width: 64px;
    background-color: var(--white-two);
    transition: .3s all;
    .btn-action {
      cursor: pointer;
      background: transparent;
      border: 0;
      font-size: 0;
      &:hover svg { fill: var(--color-primary); }
      &:first-of-type { margin-right: .5rem; }
      svg { transition: .3s fill; }
    }
    @media (max-width: 640px) {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
  }

  .list-enter-active {
    animation: enterList 10s;
    .item__title,
    .item__email,
    .item__phone,
    .item__action {
      animation: enterList 10s;
    }
  }
  .list-leave-active { animation: none !important; }

  .list-enter-active, .list-leave-active {
    transition: all 0.3s;
  }
  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  @keyframes enterList {
    0%   { background-color: var(--color-primary-light); }
    80%  { background-color: var(--color-primary-light); }
    100% { background-color: transparent;            }
  }
</style>
