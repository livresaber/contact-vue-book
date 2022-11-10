import { describe, it, expect, beforeEach, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import AppContactListEmpty from './index.vue'

let wrapper;

describe('AppContactListEmpty', () => {
  beforeEach(() => {
    wrapper = mount(AppContactListEmpty, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn(),
        })],
      }
    })
  })

  it('renders AppContactListEmpty a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppContactListEmpty text', () => {
    expect(wrapper.find('p').text()).toBe('Nenhum contato foi criado ainda.')
  })
  it('renders AppContactListEmpty icon book', () => {
    expect(wrapper.find('.icon-book').exists()).toBeTruthy()
  })
  it('renders AppContactListEmpty button create', () => {
    const btn = wrapper.find('.create-contact')
    expect(btn.exists()).toBeTruthy()
    expect(btn.text()).toBe('Criar contato')
    expect(btn.attributes('type')).toBe('button')
    expect(btn.attributes('aria-label')).toBe('Botão para criar novo contato')
  })
})
