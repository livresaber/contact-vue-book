<script setup>
import AppButton from '@/components/AppButton/index.vue'
import AppModal from '@/components/AppModal/index.vue'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const handleDelContact = (id) => {
  contact.$patch({ modalDeleteContact: { contact: null, enable: false } })
  contact.deleteContact(id)
  if(contact.filter) contact.resetFilter()
};
</script>

<template>
  <AppModal
    title="Excluir contato"
    :ariaLabel="`Modal para confirmar exclusão do contato ${contact.modalDeleteContact.contact.name}`"
    @close="contact.$patch({ modalDeleteContact: { contact: null, enable: false } })"
    :show="contact.modalDeleteContact.enable"
  >
    <p>Deseja realmente excluir o contato {{ contact.modalDeleteContact.contact.name }}?</p>
    <template v-slot:button>
      <AppButton
        :ariaLabel="`Botão para excluir o contato selecionado ${contact.modalDeleteContact.contact.name}`"
        @click="handleDelContact(contact.modalDeleteContact.contact.id)"
        color="primary"
      >
        Excluir
      </AppButton>
    </template>
  </AppModal>
</template>
