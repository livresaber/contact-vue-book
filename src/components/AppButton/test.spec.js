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
        color: 'primary'
      },
      slots: {
        default: [IconPlus, { template: 'Botão de exemplo primary' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo primary')
    expect(wrapper.props().color).toBe('primary')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes('primary')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label primary')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo aria label primary')
  })
  it('renders AppButton Button Secondary', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo aria label secondary',
        color: 'secondary'
      },
      slots: {
        default: [IconPlus, { template: 'Botão de exemplo secondary' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo secondary')
    expect(wrapper.props().color).toBe('secondary')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes('secondary')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo aria label secondary')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo aria label secondary')
  })
  it('renders AppButton Button Link', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        ariaLabel: 'Botão de exemplo link aria label',
        color: 'secondary',
        link: 'https://github.com/lucasferreiralimax',
        target: '_blank'
      },
      slots: {
        default: [IconPlus, { template: 'Botão de exemplo link' }],
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('svg.icon')).toBeTruthy()
    expect(wrapper.text()).toBe('Botão de exemplo link')
    expect(wrapper.props().color).toBe('secondary')
    expect(wrapper.props().link).toBe('https://github.com/lucasferreiralimax')
    expect(wrapper.props().target).toBe('_blank')
    expect(wrapper.attributes('href')).toBe('https://github.com/lucasferreiralimax')
    expect(wrapper.attributes('target')).toBe('_blank')
    expect(wrapper.classes('secondary')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Botão de exemplo link aria label')
    expect(wrapper.attributes('aria-label')).toBe('Botão de exemplo link aria label')
  })
})
