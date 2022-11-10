import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppInput from './index.vue'

describe('AppInput', () => {
  it('renders AppInput a vue instance', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        title: 'Label test:',
        name: 'test',
        modelValue: 'testValue',
        v: {
          $errors: []
        }
      }
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders AppInput Field', () => {
    const wrapper = mount(AppInput, {
      propsData: {
        title: 'Label test:',
        name: 'test',
        modelValue: 'testValue',
        type: 'tel',
        width: '10rem',
        v: {
          $errors: []
        }
      }
    })

    expect(wrapper.text()).toBe('Label test:')
    expect(wrapper.props().width).toBe('10rem')

    const input = wrapper.find('input')

    expect(input.element.value).toBe('testValue')
    expect(input.attributes('type')).toBe('tel')
  })
})
