import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ModalForm from './index.vue'

describe('ModalForm Create', () => {
  it('renders ModalForm a vue instance and props', () => {
    const wrapper = mount(ModalForm, {
      propsData: {
        type: 'create',
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.props().type).toBe('create')
  })
})

describe('ModalForm Edit', () => {
  it('renders ModalForm a vue instance and props', () => {
    const wrapper = mount(ModalForm, {
      propsData: {
        type: 'edit',
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.props().type).toBe('edit')
  })
})
