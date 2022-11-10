<script setup>
import AppAvatar from '@/components/AppAvatar/index.vue';
import IconEdit from '@/components/Icons/IconEdit.vue';
import IconDelete from '@/components/Icons/IconDelete.vue';

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
  <section class="contact-list">
    <div class="contact-list__header">
      <span></span>
      <span>Contatos</span>
      <span>E-mail</span>
      <span>Telefone</span>
      <span></span>
    </div>
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
  .contact-list {
    width: 100%;
    border-radius: 4px;
    background-color: var(--white-two);
    border: solid var(--color-border) 1px;
  }

  .contact-list__header {
    padding: 1rem 1rem .3rem;
    display: flex;
    span {
      font-size: 0.813rem;
      color: var(--bluey-grey);
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
  }

  .contact-list__item {
    padding: .5rem;
    font-size: 0.875rem;
    display: flex;
    border-top: solid 1px var(--white);
    transition: .3s all;
    &:hover {
      background-color: var(--very-light-pink);
    }
  }

  .item__title, .item__email, .item__phone {
    flex: 1;
  }

  .item__avatar {
    margin-right: 1rem;
  }

  .item__action {
    padding: 0;
    font-size: 0;
    width: 64px;
    .btn-action {
      cursor: pointer;
      background: transparent;
      border: 0;
      font-size: 0;
      &:hover svg {
        fill: var(--color-primary);
      }
      &:first-of-type {
        margin-right: .5rem;
      }
      svg { transition: .3s fill; }
    }
  }

  .list-enter-active {
    animation: enterList 10s;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s;
  }
  .list-leave-active {
    animation: none !important;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  @keyframes enterList {
    0% {
      background-color: var(--very-light-pink);
    }
    80% {
      background-color: var(--very-light-pink);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
