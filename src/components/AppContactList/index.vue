<script setup>
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
        <th width="140"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of list">
        <td></td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>
          <button @click="emit('edit', item)">Editar</button>
          <button @click="emit('delete', item.id)">Excluir</button>
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
    tr:last-of-type td {
      border-bottom: 0;
    }
    tbody tr:hover {
      background-color: var(--very-light-pink);
    }
    td {        
      padding: .5rem 1rem;
    }
  }
</style>