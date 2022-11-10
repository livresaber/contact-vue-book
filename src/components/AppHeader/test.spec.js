import { describe, it, expect, beforeEach, vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import AppHeader from './index.vue'

let wrapper;

describe('AppHeader', () => {
  beforeEach(() => {
    wrapper = mount(AppHeader, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn(),
        })],
      }
    })
  })

  it('renders AppHeader a vue instance', () => {   
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