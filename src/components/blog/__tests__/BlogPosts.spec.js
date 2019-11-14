import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import BlogPosts from '@/components/blog/BlogPosts'
import Loader from '@/components/Loader'
import flushPromise from 'flush-promises'
import { getters, mutations, actions } from '@/store/modules/blog'

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('@/api', () => ({
  getBlogPosts: jest.fn(() => {
    return new Promise(resolve => {
      global.process.nextTick(() => {
        resolve({ data: [{ title: 'title 1' }, { title: 'title 2' }] })
      })
    })
  })
}))

describe('Testing BlogPosts.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        blog: {
          namespaced: true,
          state: {
            blogPosts: []
          },
          getters,
          mutations,
          actions
        }
      }
    })
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

  it('shows loader initially, and hides when posts have loaded', async () => {
    expect(wrapper.contains('.loader')).toBe(true)
    await flushPromise()
    expect(wrapper.contains('.loader')).toBe(false)
  })

  it('shows correct number of posts', async () => {
    await flushPromise()
    const posts = wrapper.findAll('.post')
    expect(posts.length).toBe(2)
  })
})
