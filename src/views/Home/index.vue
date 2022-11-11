<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'

import AppHeader from '@/components/AppHeader/index.vue'
import AppContactList from '@/components/AppContactList/index.vue'
import AppContactListEmpty from '@/components/AppContactListEmpty/index.vue'

import ModalCreate from '@/modals/ModalCreate.vue'
import ModalEdit from '@/modals/ModalEdit.vue'
import ModalDelete from '@/modals/ModalDelete.vue'

import { useContactStore } from '@/stores/contact'
import validation from './validation'

const contact = useContactStore()
const initialForm = { name: '', email: '', phone: '' }
const formContact = reactive({ ...initialForm })
const v$ = useVuelidate(validation, formContact)

const resetForm = () => {
  Object.assign(formContact, { ...initialForm })
  v$.value.$reset()
}

const openEditContact = (item) => {
  contact.$patch({ modalEditContact: { contact: item, enable: true } })
  Object.assign(formContact, { name: item.name, email: item.email, phone: item.phone })
}

const openDeleteContact = (item) => {
  contact.$patch({ modalDeleteContact: { contact: item, enable: true } })
}
</script>

<template>
  <section class="page-home">
    <AppHeader type="home" />
    <main>
      <AppContactListEmpty v-if="contact.list.length == 0" />
      <AppContactList
        v-if="contact.list.length > 0 && contact.filter.length == 0"
        :list="contact.list"
        @edit="openEditContact"
        @delete="openDeleteContact"
      />
      <AppContactList
        v-if="contact.filter.length > 0"
        :list="contact.filter"
        @edit="openEditContact"
        @delete="openDeleteContact"
      />
      <Teleport to="body">
        <TransitionGroup name="modal">
          <ModalCreate
            v-if="contact.modalNewContact"
            @reset="resetForm"
            :v="v$"
          />
          <ModalEdit
          v-if="contact.modalEditContact.enable"
          @reset="resetForm"
          :v="v$"
          />
          <ModalDelete v-if="contact.modalDeleteContact.enable" />
        </TransitionGroup>
      </Teleport>
    </main>
  </section>
</template>

<style lang="scss">
  .page-home {
    max-width: 90rem;
    margin: 0 auto;
    main {
      padding: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity .3s ease;
  }
  .modal-enter-active {
    .app-modal__container {
      transform: scale(0);
    }
  }
  .modal-leave-active {
    .app-modal__container {
      transform: scale(1);
    }
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    .app-modal__container {
      transform: scale(0);
      transition: .3s transform;
    }
  }
</style>
