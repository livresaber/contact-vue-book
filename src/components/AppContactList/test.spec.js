import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppContactList from './index.vue'

let wrapper;

describe('AppContactList', () => {
  beforeEach(() => {
    wrapper = mount(AppContactList, {
      propsData: {
        list: [{
          name: "Example",
          email: "lucasferreiralimax@gmail.com",
          phone: "83 99999 9999"
        }]
      }
    })
  })

  it('renders AppContactList a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppContactList check length list', () => {
    expect(wrapper.props().list.length).toBe(1)
    expect(wrapper.vm.list.length).toBe(1)
  })
  it('AppContactList check list content vm', () => {
    wrapper.vm.list.forEach(item => {
      expect(item.name).toBe('Example')
      expect(item.email).toBe('lucasferreiralimax@gmail.com')
      expect(item.phone).toBe('83 99999 9999')
    });
  })
  it('AppContactList check render content', () => {
    wrapper.findAll('tbody tr').forEach(item => {
      expect(item.find('[data-testid="name"]').text()).toBe('Example')
      expect(item.find('[data-testid="email"]').text()).toBe('lucasferreiralimax@gmail.com')
      expect(item.find('[data-testid="phone"]').text()).toBe('83 99999 9999')
    });
  })
})
