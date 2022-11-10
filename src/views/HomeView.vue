<script setup>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader/index.vue';
import AppButton from '@/components/AppButton/index.vue';
import AppModal from '@/components/AppModal/index.vue';
import AppInput from '@/components/AppInput/index.vue';
import AppContactList from '@/components/AppContactList/index.vue';
import AppContactListEmpty from '@/components/AppContactListEmpty/index.vue';

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

const openDeleteContact = (item) => {
  contact.$patch({ modalDeleteContact: { contact: item, enable: true } })
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
  contact.$patch({ modalDeleteContact: { contact: null, enable: false } })
  contact.deleteContact(id)
  if(contact.filter) contact.resetFilter()
}
</script>

<template>
  <section class="page-home">
    <AppHeader />  
    <main>
      <template v-if="contact.list.length == 0">
        <AppContactListEmpty />
      </template>
      
      <template v-if="contact.list.length > 0 && contact.filter.length == 0">
        <AppContactList :list="contact.list" @edit="openEditContact" @delete="openDeleteContact" />
      </template>

      <template v-if="contact.filter.length > 0">
        <AppContactList :list="contact.filter" @edit="openEditContact" @delete="openDeleteContact" />
      </template>

      <Teleport to="body">
        <template v-if="contact.modalNewContact">
          <AppModal
            title="Criar novo contato"
            ariaLabel="Modal com formulário para criar novo contato"
            @close="contact.$patch({ modalNewContact: false })"
            :show="contact.modalNewContact"
          >
            <AppInput title="Nome:" v-model="formContact.name" type="text" width="24rem" />
            <AppInput title="E-mail:" v-model="formContact.email" type="email" width="24rem" />
            <AppInput title="Telefone:" v-model="formContact.phone" type="tel" width="8rem" />
  
            <template v-slot:button>
              <AppButton
                :ariaLabel="`Botão para confirmar e salvar novo contato ${formContact.name}`"
                @click="createNewContact"
                :disabled="!formContact.name || !formContact.email || !formContact.phone"
                type="primary"
              >
                Salvar
              </AppButton>
            </template>
          </AppModal>
        </template>

        <template v-if="contact.modalEditContact.enable">
          <AppModal
            title="Editar contato"
            :ariaLabel="`Modal com formulário para editar contato ${formContact.name}`"
            @close="closeEditContact"
            :show="contact.modalEditContact.enable"
          >
            <AppInput title="Nome:" v-model="formContact.name" type="text" width="24rem" />
            <AppInput title="E-mail:" v-model="formContact.email" type="email" width="24rem" />
            <AppInput title="Telefone:" v-model="formContact.phone" type="tel" width="8rem" />
            <template v-slot:button>
              <AppButton
                :ariaLabel="`Botão para confirmar a edição do contato ${formContact.name}`"
                @click="handleEditContact(contact.modalEditContact.contact)"
                :disabled="!formContact.name || !formContact.email || !formContact.phone"
                type="primary"
              >
                Salvar
              </AppButton>
            </template>
          </AppModal>          
        </template>

        <template v-if="contact.modalDeleteContact.enable">
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
                type="primary"
              >
                Excluir
              </AppButton>
            </template>
          </AppModal>
        </template>
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
  }
</style>
