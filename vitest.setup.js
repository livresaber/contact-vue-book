import { config } from '@vue/test-utils'
import Maska from 'maska'
import router from '@/router'

config.global.plugins = [Maska, router]
