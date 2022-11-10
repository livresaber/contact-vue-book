import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useContactStore = defineStore('contact', {
  state: () => ({
    list: useStorage('my-contact', []),
    filter: [],
    modalNewContact: false,
    modalEditContact: {
      contact: null,
      enable: false,
    },
    modalDeleteContact: {
      id: null,
      enable: false,
    },
  }),
  getters: {
    getListByName: (state) => {
      return (name) => state.list.filter((contact) => {
        const regex = new RegExp(name.value, 'i');
        return contact.name.match(regex);
      })
    },
  },
  actions: {
    newContact(contact) {
      this.list.push(contact)
    },
    editContact(contact) {
      const itemIndex = this.list.findIndex(item => item.id == contact.id)
      this.list[itemIndex] = contact;

      if(this.filter.length > 0) {
        const itemIndex = this.filter.findIndex(item => item.id == contact.id)
        this.filter[itemIndex] = contact;
      }
    },
    deleteContact(id) {
      this.list = this.list.filter(item => item.id !== id)
      if(this.filter.length > 0) {
        this.filter = this.filter.filter(item => item.id !== id)
      }
    },
    setFilter(list) {
      this.filter = [...list]
    },
    resetFilter() {
      this.filter = []
    },
  },
})