import { config } from '@vue/test-utils'
import { vi } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import Maska from 'maska'
import router from '@/router'

config.global.plugins = [
  createTestingPinia({ createSpy: vi.fn() }),
  Maska,
  router
]
