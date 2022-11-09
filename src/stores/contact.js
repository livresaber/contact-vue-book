import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    list: [],
    modalNewContact: false,
  }),
  actions: {
    newContact(contact) {
      this.list.push(contact)
    },
  },
})