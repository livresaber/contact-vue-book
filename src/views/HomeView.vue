<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader/index.vue';
import IconBook from '@/components/Icons/IconBook.vue';
import IconPlus from '@/components/Icons/IconPlus.vue';
import AppButton from '@/components/AppButton/index.vue';
import AppModal from '@/components/AppModal/index.vue';
import AppInput from '@/components/AppInput/index.vue';
import AppContactList from '@/components/AppContactList/index.vue';

import { v4 as uuidv4 } from 'uuid';
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const formContact = ref({ name: '', email: '', phone: '' })
const resetForm = () => formContact.value = { name: '', email: '', phone: '' };

const createNewContact = () => {
  contact.newContact({ id: uuidv4(), ...formContact.value })
  contact.$patch({ modalNewContact: false })
  resetForm()
}

const openEditContact = (item) => {
  contact.$patch({ modalEditContact: { contact: item, enable: true } })
  formContact.value = { name: item.name, email: item.email, phone: item.phone };
}

const openDeleteContact = (id) => {
  contact.$patch({ modalDeleteContact: { id: id, enable: true } })
}

const closeEditContact = () => {
  contact.$patch({ modalEditContact: { contact: null, enable: false } })
  resetForm()
}

const handleEditContact = (item) => {
  contact.editContact({ id: item.id, ...formContact.value })
  contact.$patch({ modalEditContact: { contact: null, enable: false } })
  resetForm()
}

const handleDelContact = (id) => {
  contact.$patch({ modalDeleteContact: { id: null, enable: false } })
  contact.deleteContact(id)
  if(contact.filter) contact.resetFilter()
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
      
      <template v-if="contact.list.length > 0 && contact.filter.length == 0">
        <AppContactList :list="contact.list" @edit="openEditContact" @delete="openDeleteContact"
        />
      </template>

      <template v-if="contact.filter.length > 0">
        <AppContactList :list="contact.filter" @edit="openEditContact" @delete="openDeleteContact"
        />
      </template>

      <Teleport to="body">
        <AppModal
          title="Criar novo contato"
          ariaLabel="Modal de exemplo"
          @close="contact.$patch({ modalNewContact: false })"
          :show="contact.modalNewContact"
        >
          <AppInput title="Nome:" v-model="formContact.name" type="text" width="24rem" />
          <AppInput title="E-mail:" v-model="formContact.email" type="email" width="24rem" />
          <AppInput title="Telefone:" v-model="formContact.phone" type="tel" width="8rem" />
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

        <AppModal
          title="Editar contato"
          ariaLabel="Modal de exemplo"
          @close="closeEditContact"
          :show="contact.modalEditContact.enable"
        >
          <AppInput title="Nome:" v-model="formContact.name" type="text" width="24rem" />
          <AppInput title="E-mail:" v-model="formContact.email" type="email" width="24rem" />
          <AppInput title="Telefone:" v-model="formContact.phone" type="tel" width="8rem" />
          <template v-slot:button>
            <AppButton
              ariaLabel="Botão para confirmar a edição do contato"
              type="primary"
              @click="handleEditContact(contact.modalEditContact.contact)"
              :disabled="!formContact.name || !formContact.email || !formContact.phone"
            >
              Salvar
            </AppButton>
          </template>
        </AppModal>

        <AppModal
          title="Excluir contato"
          ariaLabel="Modal de exemplo"
          @close="contact.$patch({ modalDeleteContact: { id: null, enable: false } })"
          :show="contact.modalDeleteContact.enable"
        >
          <p>Deseja realmente excluir o contato?</p>
          <template v-slot:button>
            <AppButton
              ariaLabel="Botão para excluir o contato selecionado"
              type="primary"
              @click="handleDelContact(contact.modalDeleteContact.id)"
            >
              Excluir
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
