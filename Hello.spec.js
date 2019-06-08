import { mount } from '@vue/test-utils' 
import Hello from './Hello.vue'

const MockLog = jest.fn(log => log)

console.log = (log) => {
  MockLog(log)
}

describe('Test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Hello)
  })

  it('does stuff', () => {
    wrapper.setProps({ foo: 'xxx' })

    // 'console.log()' does not work in Hello.vue computed
    // BaseInput in $emit('input') change v-model
    expect(MockLog.mock.calls[0][0]).toBe('xxx')
  })
})