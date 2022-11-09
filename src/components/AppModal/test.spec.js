import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppModal from './index.vue'

const btnMock = '<button data-testid="btn-test">Test button</button>';

describe('AppModal', () => {
  it('renders AppModal a vue instance and props', () => {
    const wrapper = mount(AppModal, {
      propsData: {
        title: 'Exemplo modal title',
        ariaLabel: 'Exemplo modal aria label',
        show: true,
      }
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.props().title).toBe('Exemplo modal title')
    expect(wrapper.props().show).toBe(true)
    expect(wrapper.classes('show')).toBeTruthy()
    expect(wrapper.props().ariaLabel).toBe('Exemplo modal aria label')
  })
  it('AppModal not render anything', () => {
    const wrapper = mount(AppModal, {
      propsData: {
        title: 'Exemplo modal title',
        ariaLabel: 'Exemplo modal aria label',
        show: false,
      },
      slots: {
        default: [{ template: 'Texto slot modal' }],
        button: [{ template: btnMock }],
      }
    })
    expect(wrapper.classes('show')).toBeFalsy()    
    expect(wrapper.find('.app-modal__header').exists()).toBeFalsy()
    expect(wrapper.find('.app-modal__footer').exists()).toBeFalsy()
    expect(wrapper.find('.app-modal__content').exists()).toBeFalsy()
    expect(wrapper.find('[aria-label="Botão de exemplo aria label"]').exists()).toBeFalsy()
  })
  it('AppModal render content and slots', () => {
    const wrapper = mount(AppModal, {
      propsData: {
        title: 'Exemplo modal title',
        ariaLabel: 'Exemplo modal aria label',
        show: true,
      },
      slots: {
        default: [{ template: 'Texto slot modal' }],
        button: [{ template: btnMock }],
      }
    })
    const header = wrapper.find('.app-modal__header');
    const content = wrapper.find('.app-modal__content');
    const footer = wrapper.find('.app-modal__content');

    expect(wrapper.classes('show')).toBeTruthy() 
    
    expect(header.exists()).toBeTruthy()
    expect(header.text()).toBe('Exemplo modal title')

    expect(content.exists()).toBeTruthy()
    expect(content.text()).toBe('Texto slot modal')

    expect(footer.exists()).toBeTruthy()

    expect(wrapper.find('[data-testid="btn-test"]').exists()).toBeTruthy()
    expect(wrapper.find('[aria-label="Botão para cancelar modal Exemplo modal title"]').exists()).toBeTruthy()
  })
})