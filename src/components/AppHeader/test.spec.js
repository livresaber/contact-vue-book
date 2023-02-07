import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppHeader from './index.vue'

describe('AppHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppHeader)
  })

  it('renders AppHeader a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders Logo Vue', () => {
    const logo = wrapper.find('[alt="Vue logo"]')

    expect(logo.exists()).toBeTruthy()
    expect(logo.attributes('width')).toBe('32')
    expect(logo.attributes('height')).toBe('32')
  })
})

describe('AppHeader with type home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppHeader, {
      propsData: {
        type: 'home',
      },
    })
  })

  it('renders AppHeader a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppHeader type home', () => {
    expect(wrapper.props().type).toBe('home')
  })
})

describe('AppHeader without type home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppHeader)
  })

  it('renders AppHeader a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders AppHeader type home', () => {
    expect(wrapper.props().type).toBeFalsy()
  })
})
