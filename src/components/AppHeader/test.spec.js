import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from './index.vue'

describe('AppHeader', () => {
  it('renders AppHeader a vue instance', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.exists()).toBeTruthy()
  })
})