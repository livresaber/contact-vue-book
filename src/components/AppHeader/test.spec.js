import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from './index.vue'

describe('AppHeader', () => {
  it('renders AppHeader a vue instance', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Logo Vue', () => {
    const wrapper = mount(AppHeader)
    const logo = wrapper.find('[alt="Vue logo"]')

    expect(logo.exists()).toBeTruthy()
    expect(logo.element.getAttribute('width')).toBe('32')
    expect(logo.element.getAttribute('height')).toBe('32')
  })

  it('renders Logo Ubook', () => {
    const wrapper = mount(AppHeader)
    const logo = wrapper.find('[alt="Ubook logo"]')

    expect(logo.exists()).toBeTruthy()
    expect(logo.element.getAttribute('width')).toBe('148')
    expect(logo.element.getAttribute('height')).toBe('32')
  })
})