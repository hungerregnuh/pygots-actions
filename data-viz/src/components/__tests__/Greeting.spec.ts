import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Greeting from '../Greeting.vue'

describe('Greeting', () => {
  it('renders properly', () => {
    const wrapper = mount(Greeting, { props: { greeting: 'Hello TestyMcTestFace!' } })
    expect(wrapper.text()).toContain('Hello TestyMcTestFace!')
  })
})
