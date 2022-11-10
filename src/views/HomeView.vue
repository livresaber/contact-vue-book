<script setup>
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, helpers  } from '@vuelidate/validators'

import AppHeader from '@/components/AppHeader/index.vue';
import AppButton from '@/components/AppButton/index.vue';
import AppModal from '@/components/AppModal/index.vue';
import AppInput from '@/components/AppInput/index.vue';
import AppContactList from '@/components/AppContactList/index.vue';
import AppContactListEmpty from '@/components/AppContactListEmpty/index.vue';

import { generateDarkColorHex } from '@/utils'
import { useContactStore } from '@/stores/contact'

const contact = useContactStore()

const formContact = reactive({
  name: '',
  email: '',
  phone: ''
})

const rulesForm = {
  name: {
    required: helpers.withMessage('Campo nome obrigatório', required),
    minLength: helpers.withMessage('Quantidade mínima duas letras', minLength(2)),
  },
  email: {
    required: helpers.withMessage('Campo e-mail obrigatório', required),
    email: helpers.withMessage('Escreva um e-mail válido', email)
  },
  phone: {
    required: helpers.withMessage('Campo telefone obrigatório', required),
    minLength: helpers.withMessage('Digite mais números', minLength(14)),
  }
}

const v$ = useVuelidate(rulesForm, formContact)

const resetForm = () => {
  v$.value.$reset()
  Object.assign(formContact, {
    name: '',
    email: '',
    phone: ''
  })
};

const createNewContact = () => {
  contact.newContact({
    id: uuidv4(),
    color: generateDarkColorHex(),
    ...formContact
  })
  contact.$patch({ modalNewContact: false })
  resetForm()
}

const openEditContact = (item) => {
  contact.$patch({ modalEditContact: { contact: item, enable: true } })
  Object.assign(formContact, { name: item.name, email: item.email, phone: item.phone })
}

const openDeleteContact = (item) => {
  contact.$patch({ modalDeleteContact: { contact: item, enable: true } })
}

const closeNewContact = () => {
  contact.$patch({ modalNewContact: false })
  resetForm()
}

const closeEditContact = () => {
  contact.$patch({ modalEditContact: { contact: null, enable: false } })
  resetForm()
}

const handleEditContact = (item) => {
  contact.editContact({
    id: item.id,
    color: item.color,
    ...formContact
  })
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
            @close="closeNewContact"
            :show="contact.modalNewContact"
          >
            <AppInput
              title="Nome:"
              name="name"
              :v="v$.name"
              v-model="v$.name.$model"
              type="text"
              width="24rem"
            />
            <AppInput
              title="E-mail:"
              name="email"
              :v="v$.email"
              v-model="v$.email.$model"
              type="email"
              width="24rem"
            />
            <AppInput
              title="Telefone:"
              name="phone"
              :v="v$.phone"
              v-model="v$.phone.$model"
              type="tel"
              width="8rem"
            />
            <template v-slot:button>
              <AppButton
                :ariaLabel="`Botão para confirmar e salvar novo contato ${formContact.name}`"
                @click="createNewContact"
                :disabled="!formContact.name || !formContact.email || !formContact.phone"
                color="primary"
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
            <AppInput
              title="Nome:"
              name="name"
              :v="v$.name"
              v-model="v$.name.$model"
              type="text"
              width="24rem"
            />
            <AppInput
              title="E-mail:"
              name="email"
              :v="v$.email"
              v-model="v$.email.$model"
              type="email"
              width="24rem"
            />
            <AppInput
              title="Telefone:"
              name="phone"
              :v="v$.phone"
              v-model="v$.phone.$model"
              type="tel"
              width="8rem"
            />
            <template v-slot:button>
              <AppButton
                :ariaLabel="`Botão para confirmar a edição do contato ${formContact.name}`"
                @click="handleEditContact(contact.modalEditContact.contact)"
                :disabled="!formContact.name || !formContact.email || !formContact.phone"
                color="primary"
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
                color="primary"
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
