import { shallowMount } from '@vue/test-utils'
import Save from '@/components/Save.vue'

import router from '@/router'

const mountOptions = {
  global: {
    plugins: [router],
  },
}

describe('Testing Component props', () => {
  const wrapper = shallowMount(Save, {
    propsData: {
      amount: 30,
      status: 'Win',
      win: [0, 1],
      ndraw: [1, 2, 3, 4, 5],
    },
  })

  it('checks the prop win', () => {
    expect(wrapper.props('win')).toStrictEqual([0, 1])
  })

  it('checks the prop ndraw', () => {
    expect(wrapper.props('ndraw')).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('checks the prop amount', () => {
    expect(wrapper.props('amount')).toBe(30)
  })

  it('checks the prop win', () => {
    expect(wrapper.props('status')).toBe('Win')
  })
})
