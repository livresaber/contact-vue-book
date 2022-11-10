<script setup>
import { v4 as uuidv4 } from 'uuid'

import AppButton from '@/components/AppButton/index.vue'
import AppModal from '@/components/AppModal/index.vue'
import AppInput from '@/components/AppInput/index.vue'

import { generateDarkColorHex } from '@/utils'
import { useContactStore } from '@/stores/contact'

const emit = defineEmits(['reset'])
const contact = useContactStore()
const props = defineProps({
  v: {
    type: Object,
    required: true
  }
})

const createNewContact = () => {
  const { name, email, phone } = props.v

  contact.newContact({
    id: uuidv4(),
    color: generateDarkColorHex(),
    name: name.$model,
    email: email.$model,
    phone: phone.$model,
  })

  contact.$patch({ modalNewContact: false })
  emit('reset')
}

const closeNewContact = () => {
  contact.$patch({ modalNewContact: false })
  emit('reset')
};
</script>

<template>
  <AppModal
    title="Criar novo contato"
    ariaLabel="Modal com formulário para criar novo contato"
    :show="contact.modalNewContact"
    @close="closeNewContact"
  >
    <AppInput
      title="Nome:"
      name="name"
      :v="v.name"
      v-model="v.name.$model"
      type="text"
      width="24rem"
    />
    <AppInput
      title="E-mail:"
      name="email"
      :v="v.email"
      v-model="v.email.$model"
      type="email"
      width="24rem"
    />
    <AppInput
      title="Telefone:"
      name="phone"
      :v="v.phone"
      v-model="v.phone.$model"
      type="tel"
      width="8rem"
    />
    <template v-slot:button>
      <AppButton
        :ariaLabel="`Botão para confirmar e salvar novo contato ${v.name.$model}`"
        :disabled="!v.name.$model || !v.email.$model || !v.phone.$model"
        @click="createNewContact"
        color="primary"
      >
        Salvar
      </AppButton>
    </template>
  </AppModal>
</template>
