import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPosts from '@/components/blog/BlogPosts'
import Loader from '@/components/Loader'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Testing BlogPosts.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallowMount(BlogPosts, {
      localVue,
      store,
      stubs: {
        Loader
      }
    })
  })

  it('renders without errors', () => {
    expect(wrapper.contains('div.blog-posts')).toBe(true)
  })

  it('shows loader initially, and hides when posts have loaded', () => {
    expect(wrapper.contains('.loader')).toBe(true)
  })
})
