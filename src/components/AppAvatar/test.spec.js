import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppAvatar from './index.vue'

describe('AppAvatar', () => {
  it('renders AppAvatar a vue instance and prop ariaLabel', () => {
    const wrapper = mount(AppAvatar, {
      propsData: {
        ariaLabel: 'Avatar exemplo aria label',
        name: 'lucas',
        color: '#000'
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Avatar exemplo aria label')
  })
})
