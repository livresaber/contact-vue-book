import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppContactListEmpty from './index.vue'

let wrapper;

describe('AppContactListEmpty', () => {
  beforeEach(() => {
    wrapper = mount(AppContactListEmpty)
  })

  it('renders AppContactListEmpty a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppContactListEmpty text', () => {
    expect(wrapper.find('p').text()).toBe('Crie uma lista de contatos de forma uma simples')
  })
  it('renders AppContactListEmpty icon book', () => {
    expect(wrapper.find('.icon-book').exists()).toBeTruthy()
  })
  it('renders AppContactListEmpty button create', () => {
    const btn = wrapper.find('.create-contact')
    expect(btn.exists()).toBeTruthy()
    expect(btn.text()).toBe('Novo Contato')
    expect(btn.attributes('aria-label')).toBe('Botão para criar novo contato')
  })
})
