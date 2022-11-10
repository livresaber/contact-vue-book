import { minLength, required, email, helpers  } from '@vuelidate/validators'

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

export default rulesForm
