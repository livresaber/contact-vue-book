import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppNavigation from './index.vue'

let wrapper;

describe('AppNavigation', () => {
  beforeEach(() => {
    wrapper = mount(AppNavigation)
  })

  it('renders AppNavigation a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
