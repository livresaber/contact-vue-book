<script setup>
import AppButton from '@/components/AppButton/index.vue'
import AppModal from '@/components/AppModal/index.vue'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const { item: { name, id }, enable } = contact.modalDeleteContact

const closeModal = () => {
  contact.$patch({ modalDeleteContact: { item: null, enable: false } })
}

const handleDelContact = (id) => {
  closeModal()
  contact.deleteContact(id)
  if(contact.filter) contact.resetFilter()
};
</script>

<template>
  <AppModal
    title="Excluir contato"
    :ariaLabel="`Modal para confirmar exclusão do contato ${name}`"
    @close="closeModal"
    :show="enable"
  >
    <p>Deseja realmente excluir o contato {{ name }}?</p>
    <template v-slot:button>
      <AppButton
        :ariaLabel="`Botão para excluir o contato selecionado ${name}`"
        @click="handleDelContact(id)"
        color="primary"
      >
        Excluir
      </AppButton>
    </template>
  </AppModal>
</template>
