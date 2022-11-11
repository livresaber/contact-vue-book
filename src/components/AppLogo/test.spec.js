import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppLogo from './index.vue'

let wrapper;

describe('AppLogo', () => {
  beforeEach(() => {
    wrapper = mount(AppLogo)
  })

  it('renders AppLogo a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Logo Vue', () => {
    const logo = wrapper.find('[alt="Vue logo"]')

    expect(logo.exists()).toBeTruthy()
    expect(logo.attributes('width')).toBe('32')
    expect(logo.attributes('height')).toBe('32')
  })

  it('renders Logo Ubook', () => {
    const logo = wrapper.find('[alt="Ubook logo"]')

    expect(logo.exists()).toBeTruthy()
    expect(logo.attributes('width')).toBe('148')
    expect(logo.attributes('height')).toBe('32')
  })
})
