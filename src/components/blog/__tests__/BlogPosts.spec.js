import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPosts from '../../blog/BlogPosts.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing BlogPosts.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallowMount(BlogPosts, { localVue, store })
  })

  it('renders without errors', () => {
    console.log('shallowMount', shallowMount)
    expect(wrapper.contains('div')).toBe(true)
  })
})
