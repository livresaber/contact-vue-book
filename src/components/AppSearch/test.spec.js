import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppSearch from './index.vue'

describe('AppSearch', () => {
  it('renders AppSearch a vue instance', () => {
    const wrapper = mount(AppSearch)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppSearch Field', () => {
    const wrapper = mount(AppSearch)
    const field = wrapper.find('.app-search__field')

    expect(field).toBeTruthy()
    expect(field.attributes('type')).toBe('text')
    expect(field.attributes('aria-label')).toBe('Campo de pesquisa para buscar contato')
  })

  it('renders AppSearch Button', () => {
    const wrapper = mount(AppSearch)
    const btn = wrapper.find('.app-search__button')

    expect(btn).toBeTruthy()
    expect(btn.find('svg.icon')).toBeTruthy()
    expect(btn.text()).toBe('Buscar contato')
    expect(btn.attributes('type')).toBe('button')
    expect(btn.attributes('aria-label')).toBe('Botão para buscar contato no campo de pesquisa')

  })
})