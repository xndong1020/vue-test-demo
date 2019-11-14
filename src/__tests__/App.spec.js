import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing App.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallowMount(App, { localVue, store })
  })

  it('renders without errors', () => {
    expect(wrapper.contains('div#app')).toBe(true)
  })
})
