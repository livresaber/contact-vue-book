<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader/index.vue';
import IconBook from '@/components/Icons/IconBook.vue';
import IconPlus from '@/components/Icons/IconPlus.vue';
import AppButton from '@/components/AppButton/index.vue';
import AppModal from '@/components/AppModal/index.vue';

import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const formContact = ref({
  name: '',
  email: '',
  phone: '',
})

const createNewContact = () => {
  contact.newContact({ ...formContact.value })
  contact.$patch({ modalNewContact: false })
  formContact.value = {
    name: '',
    email: '',
    phone: '',
  };
}
</script>

<template>
  <section class="page-home">
    <AppHeader />  
    <main>
      <template v-if="contact.list.length == 0">
        <IconBook class="icon-book" />
        <p>Nenhum contato foi criado ainda.</p>
        <AppButton
          class="create-contact"
          ariaLabel="Botão para criar novo contato"
          type="secondary"
          @click="contact.$patch({ modalNewContact: true })"
        >
          <IconPlus />
          Criar contato
        </AppButton>
      </template>
      <Teleport to="body">
        <AppModal
          title="Criar novo contato"
          ariaLabel="Modal de exemplo"
          @close="contact.$patch({ modalNewContact: false })"
          :show="contact.modalNewContact"
        >
          <label>
            Nome: {{ formContact.name }}
            <input v-model="formContact.name" type="text">
          </label>
          <label>
            E-mail: {{ formContact.email }}
            <input v-model="formContact.email" type="email">
          </label>
          <label>
            Telefone: {{ formContact.phone }}
            <input v-model="formContact.phone" type="tel">
          </label>
          <template v-slot:button>
            <AppButton
              ariaLabel="Botão para confirmar e criar novo contato"
              type="primary"
              @click="createNewContact"
              :disabled="!formContact.name || !formContact.email || !formContact.phone"
            >
              Salvar
            </AppButton>
          </template>
        </AppModal>
      </Teleport>
    </main>
  </section>
</template>

<style lang="scss">
  .page-home {
    max-width: 90rem;
    margin: 0 auto;
  }
  main {
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .icon-book { margin: 6rem 0 1.5rem; }
    .create-contact {
      border-radius: 20px;
      padding: 0.75rem 1.375rem 0.75rem 1rem;
      margin-top: 1.5rem;
    }
  }
</style>
