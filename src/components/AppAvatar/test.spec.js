import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppAvatar from './index.vue'

let wrapper;

describe('AppAvatar', () => {
  beforeEach(() => {
    wrapper = mount(AppAvatar, {
      propsData: {
        ariaLabel: 'Avatar exemplo aria label',
        name: 'lucas',
        color: '#000'
      }
    })
  })
  it('renders AppAvatar a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppAvatar props', () => {
    expect(wrapper.props().name).toBe('lucas')
    expect(wrapper.props().color).toBe('#000')
    expect(wrapper.props().ariaLabel).toBe('Avatar exemplo aria label')
  })
  it('renders AppAvatar attributes aria-label', () => {
    expect(wrapper.attributes('aria-label')).toBe('Avatar exemplo aria label')
  })
  it('renders AppAvatar text L', () => {
    expect(wrapper.text()).toBe('L')
  })
})
