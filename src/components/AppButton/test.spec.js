import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from './index.vue'
import IconPlus from '@/components/Icons/IconPlus.vue';

describe('AppButton', () => {
  it('renders AppButton a vue instance and prop ariaLabel', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo aria label'
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label')
  })
  it('renders AppButton Button default', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo aria label'
      },
      slots: {
        default: [IconPlus, { template: 'Botão de exemplo' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo aria label')

  })
  it('renders AppButton Button Primary', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo aria label primary',
        type: 'primary'
      },
      slots: {
        default: [IconPlus, { template: 'Botão de exemplo primary' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo primary')
    expect(wrapper.props().type).toBe('primary')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes('primary')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label primary')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo aria label primary')
  })
  it('renders AppButton Button Secondary', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo aria label secondary',
        type: 'secondary'
      },
      slots: { 
        default: [IconPlus, { template: 'Botão de exemplo secondary' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo secondary')
    expect(wrapper.props().type).toBe('secondary')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes('secondary')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label secondary')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo aria label secondary')
  })
})