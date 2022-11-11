<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { v4 as uuidv4 } from 'uuid'

import AppButton from '@/components/AppButton/index.vue'
import AppModal from '@/components/AppModal/index.vue'
import AppInput from '@/components/AppInput/index.vue'

import { generateDarkColorHex } from '@/utils'
import { useContactStore } from '@/stores/contact'
import rulesForm from './rulesForm'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const contact = useContactStore()
const formContact = reactive({ ...rulesForm.structure })
const v$ = useVuelidate(rulesForm.validation, formContact)
const showModal = ref(false)

onMounted(() => {
  showModal.value = props.type == 'create' ? contact.modalNewContact : contact.modalEditContact.enable
  if(props.type == 'edit') Object.assign(formContact, { ...contact.modalEditContact.item })
})

const closeModal = () => {
  props.type == 'create'
    ? contact.$patch({ modalNewContact: false })
    : contact.$patch({ modalEditContact: { item: null, enable: false } })

  Object.assign(formContact, { ...rulesForm.structure })
  showModal.value = false
  v$.value.$reset()
}

const handleEventContact = () => {
  const formData = {
    name: v$.value.name.$model,
    email: v$.value.email.$model,
    phone: v$.value.phone.$model
  }

  props.type == 'create'
    ? contact.newContact({
        id: uuidv4(),
        color: generateDarkColorHex(),
        ...formData
      })
    : contact.editContact({
      id: contact.modalEditContact.item.id,
      color: contact.modalEditContact.item.color,
      ...formData
    })

  closeModal()
}
</script>

<template>
  <AppModal
    :class="`modal-${type}`"
    :title="`${type == 'create' ? 'Criar novo' : 'Editar' } contato`"
    :ariaLabel="`${type == 'create'
      ? 'Modal com formulário para criar novo contato'
      : `Modal com formulário para editar contato ${v$.name.$model}`
    }`"
    :show="showModal"
    @close="closeModal"
  >
    <AppInput
      title="Nome:"
      name="name"
      :v="v$.name"
      v-model="v$.name.$model"
      type="text"
      maxlength="25"
      width="100%"
    />
    <AppInput
      title="E-mail:"
      name="email"
      :v="v$.email"
      v-model="v$.email.$model"
      type="email"
      maxlength="35"
      width="100%"
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
        :ariaLabel="`Botão para confirmar ${type == 'create' ? 'e salvar novo' : 'a edição'} contato ${v$.name.$model}`"
        :disabled="v$.name.$invalid || v$.email.$invalid || v$.phone.$invalid"
        @click="handleEventContact"
        color="primary"
      >
        Salvar
      </AppButton>
    </template>
  </AppModal>
</template>

<style lang="scss">
  .app-modal__container {
    width: 25rem;
  }
</style>
