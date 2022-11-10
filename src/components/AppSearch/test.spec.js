import { describe, it, expect, beforeEach, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import AppSearch from './index.vue'

let wrapper;

describe('AppSearch', () => {
  beforeEach(() => {
    wrapper = mount(AppSearch, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn(),
        })],
      }
    })
  })

  it('renders AppSearch a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppSearch Field', () => {
    const field = wrapper.find('.app-search__field')

    expect(field).toBeTruthy()
    expect(field.attributes('type')).toBe('text')
    expect(field.attributes('aria-label')).toBe('Campo de pesquisa para buscar contato')
  })

  it('renders AppSearch Button', () => {
    const btn = wrapper.find('.app-search__button')

    expect(btn).toBeTruthy()
    expect(btn.find('svg.icon')).toBeTruthy()
    expect(btn.text()).toBe('Buscar contato')
    expect(btn.attributes('type')).toBe('button')
    expect(btn.attributes('aria-label')).toBe('Botão para buscar contato no campo de pesquisa')

  })
})