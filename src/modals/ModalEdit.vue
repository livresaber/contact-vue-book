<script setup>
import AppButton from '@/components/AppButton/index.vue'
import AppModal from '@/components/AppModal/index.vue'
import AppInput from '@/components/AppInput/index.vue'
import { useContactStore } from '@/stores/contact'

const emit = defineEmits(['reset'])
const contact = useContactStore()
const props = defineProps({
  v: {
    type: Object,
    required: true
  }
})

const handleEditContact = (item) => {
  const { name, email, phone } = props.v

  contact.editContact({
    id: item.id,
    color: item.color,
    name: name.$model,
    email: email.$model,
    phone: phone.$model,
  })

  contact.$patch({ modalEditContact: { contact: null, enable: false } })
  emit('reset')
}

const closeEditContact = () => {
  contact.$patch({ modalEditContact: { contact: null, enable: false } })
  emit('reset')
}
</script>

<template>
  <AppModal
    title="Editar contato"
    :ariaLabel="`Modal com formulário para editar contato ${v.name.$model}`"
    :show="contact.modalEditContact.enable"
    @close="closeEditContact"
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
        :ariaLabel="`Botão para confirmar a edição do contato ${v.name.$model}`"
        :disabled="!v.name.$model || !v.email.$model || !v.phone.$model"
        @click="handleEditContact(contact.modalEditContact.contact)"
        color="primary"
      >
        Salvar
      </AppButton>
    </template>
  </AppModal>
</template>
