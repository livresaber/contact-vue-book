import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
  state: () => ({
    list: []
  }),
  actions: {
    newContact(contact) {
      this.list.push(contact)
    },
  },
})