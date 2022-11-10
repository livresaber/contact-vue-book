<script setup>
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
  <table class="contact-list">
    <thead>
      <tr>
        <th width="30"></th>
        <th>Contatos</th>
        <th>E-mail</th>
        <th>Telefone</th>
        <th class="actions">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of list">
        <td></td>
        <td data-testid="name">{{ item.name }}</td>
        <td data-testid="email">{{ item.email }}</td>
        <td data-testid="phone">{{ item.phone }}</td>
        <td class="actions">
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
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
  .contact-list {
    width: 100%;
    overflow: hidden;
    background-color: var(--white-two);
    border-collapse: separate;
    border: solid var(--color-border) 1px;
    -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
            border-radius: 4px;
    th {
      color: var(--bluey-grey);
      font-size: 0.813rem;
      padding: 1rem 1rem .5rem;
    }
    th, td {
      text-align: left;
      border-collapse: collapse;
      border-bottom: 1px solid var(--color-border);
    }
    tr {
      transition: .3s background-color;
      &:last-of-type td {
        border-bottom: 0;
      }
    }
    tbody tr:hover {
      background-color: var(--very-light-pink);
    }
    td { padding: .5rem 1rem; }
    .actions {
      padding: 0;
      font-size: 0;
      width: 90px;
    }
    .btn-action {
      cursor: pointer;
      background: transparent;
      border: 0;
      font-size: 0;
      margin: 0 .5rem;
      &:hover svg {
        fill: var(--color-primary);
      }
      svg { transition: .3s fill; }
    }
  }
</style>
