import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ModalDelete from './index.vue'

describe('ModalDelete', () => {
  it('renders ModalDelete a vue instance', () => {
    const wrapper = mount(ModalDelete)

    expect(wrapper.exists()).toBeTruthy()
  })
})
