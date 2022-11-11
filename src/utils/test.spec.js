import { describe, it, expect } from 'vitest'

import { generateDarkColorHex } from './'

describe('generateDarkColorHex', () => {
  it('renders generateDarkColorHex is not undefined', () => {
    expect(generateDarkColorHex()).toBeDefined()
  })
  it('renders generateDarkColorHex return string', () => {
    expect(generateDarkColorHex()).toBeTypeOf('string')
  })
  it('renders generateDarkColorHex return a hexdecimal with regex', () => {
    expect(generateDarkColorHex()).toMatch(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/)
  })
})
