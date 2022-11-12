<script setup>
import { reactive, onMounted } from 'vue'
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

onMounted(() => {
  if(props.type == 'edit') Object.assign(formContact, { ...contact.modalEditContact.item })
})

const closeModal = () => {
  props.type == 'create'
    ? contact.$patch({ modalNewContact: false })
    : contact.$patch({ modalEditContact: { item: null, enable: false } })

  Object.assign(formContact, { ...rulesForm.structure })
  v$.value.$reset()
}

const handleEventContact = () => {
  const formData = {
    name: v$.value.name.$model,
    email: v$.value.email.$model,
    phone: v$.value.phone.$model
  }

  if (props.type == 'create') {
    contact.newContact({
      id: uuidv4(),
      color: generateDarkColorHex(),
      ...formData
    })
  } else {
    const { id, color } = contact.modalEditContact.item
    contact.editContact({ id, color, ...formData })
  }

  closeModal()
}

const text = {
  create: {
    title: 'Criar novo contato',
    ariaLabelModal: 'Modal com formulário para criar novo contato',
    ariaLabelButton: 'Botão para confirmar e salvar novo contato'
  },
  edit: {
    title: 'Editar contato',
    ariaLabelModal: 'Modal com formulário para editar contato',
    ariaLabelButton: 'Botão para confirmar a edição do contato'
  }
}

const inputs = [
  { title: 'Nome:',     name: 'name',  type: 'text',     width: '100%', maxlength: 25, },
  { title: 'E-mail:',   name: 'email', type: 'email',    width: '100%', maxlength: 35  },
  { title: 'Telefone:', name: 'phone', type: 'emtelail', width: '8rem'                 }
]

</script>

<template>
  <AppModal
    :class="`modal-${type}`"
    :title="text[type].title"
    :ariaLabel="text[type].ariaLabelModal"
    @close="closeModal"
  >
    <AppInput
      v-for="item of inputs"
      :key="item.name"
      :title="item.title"
      :name="item.name"
      :v="v$[item.name]"
      v-model="v$[item.name].$model"
      :maxlength="item.maxlength ? String(item.maxlength) : null"
      :type="item.type"
      :width="item.width"
    />
    <template v-slot:button>
      <AppButton
        :ariaLabel="text[type].ariaLabelButton"
        :disabled="v$.$invalid"
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
